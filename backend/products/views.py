
from rest_framework import viewsets, permissions, status, generics
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Category, Product, Order
from .serializers import (
    CategorySerializer, 
    ProductSerializer, 
    ProductCreateSerializer,
    OrderSerializer
)
from django.db.models import Q
from django.shortcuts import get_object_or_404

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        queryset = Product.objects.filter(is_active=True).prefetch_related('images', 'category')
        
        # Filter by category
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category__slug=category)
        
        # Filter by seller
        seller = self.request.query_params.get('seller', None)
        if seller:
            queryset = queryset.filter(seller__id=seller)
        
        # Featured products
        featured = self.request.query_params.get('featured', None)
        if featured and featured.lower() == 'true':
            queryset = queryset.filter(is_featured=True)
        
        # Search
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) | 
                Q(description__icontains=search) |
                Q(category__name__icontains=search)
            )
        
        return queryset
    
    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return ProductCreateSerializer
        return ProductSerializer
    
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]
    
    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)

    def get_object(self):
        # Allow lookup by ID or slug
        queryset = self.filter_queryset(self.get_queryset())
        lookup_url_kwarg = self.lookup_url_kwarg or self.lookup_field
        filter_kwargs = {self.lookup_field: self.kwargs[lookup_url_kwarg]}
        
        # Try to get by slug first
        try:
            obj = get_object_or_404(queryset, **filter_kwargs)
            self.check_object_permissions(self.request, obj)
            return obj
        except:
            # If that fails, try to get by ID
            try:
                product_id = int(self.kwargs[lookup_url_kwarg])
                obj = get_object_or_404(queryset, id=product_id)
                self.check_object_permissions(self.request, obj)
                return obj
            except (ValueError, KeyError):
                raise Http404
    
    @action(detail=False, methods=['get'], url_path='my-products')
    def my_products(self, request):
        if request.user.is_authenticated:
            queryset = Product.objects.filter(seller=request.user)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        return Response({'detail': 'Authentication credentials were not provided.'}, 
                        status=status.HTTP_401_UNAUTHORIZED)

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if user.user_type == 'buyer':
            return Order.objects.filter(buyer=user).prefetch_related('items', 'items__product')
        elif user.user_type == 'seller':
            # Get orders that contain products sold by this seller
            return Order.objects.filter(items__product__seller=user).distinct().prefetch_related('items', 'items__product')
        return Order.objects.none()
    
    def perform_create(self, serializer):
        serializer.save(buyer=self.request.user)
