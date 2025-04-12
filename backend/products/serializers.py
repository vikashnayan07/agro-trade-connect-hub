
from rest_framework import serializers
from .models import Category, Product, ProductImage, Order, OrderItem
from django.contrib.auth import get_user_model

User = get_user_model()

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'description')

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('id', 'image', 'is_primary')

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)
    seller_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = ('id', 'title', 'slug', 'description', 'price', 'quantity_available', 
                 'unit', 'category', 'category_name', 'seller', 'seller_name', 
                 'is_featured', 'is_active', 'images', 'created_at')
    
    def get_seller_name(self, obj):
        return f"{obj.seller.first_name} {obj.seller.last_name}" if obj.seller.first_name else obj.seller.email

class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('title', 'description', 'price', 'quantity_available', 
                 'unit', 'category', 'is_featured', 'is_active')
    
    def create(self, validated_data):
        validated_data['seller'] = self.context['request'].user
        return super().create(validated_data)

class OrderItemSerializer(serializers.ModelSerializer):
    product_title = serializers.CharField(source='product.title', read_only=True)
    
    class Meta:
        model = OrderItem
        fields = ('id', 'product', 'product_title', 'quantity', 'price')

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    buyer_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Order
        fields = ('id', 'buyer', 'buyer_name', 'status', 'total_amount', 
                 'shipping_address', 'phone', 'notes', 'items', 'created_at')
    
    def get_buyer_name(self, obj):
        return f"{obj.buyer.first_name} {obj.buyer.last_name}" if obj.buyer.first_name else obj.buyer.email
    
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
            
        return order
