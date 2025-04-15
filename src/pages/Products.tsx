import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import ProductForm from "@/components/ProductForm";
import api from "@/services/api";
import { Loader2, Filter, Search, Tag, Plus, Minus, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity_available: number;
  unit: string;
  category_name: string;
  is_active: boolean;
  is_featured: boolean;
  seller_name: string;
}

const Products = () => {
  const { isAuthenticated, user } = useAuth();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [editProductId, setEditProductId] = useState<number | null>(null);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ['products', searchTerm, categoryFilter],
    queryFn: async () => {
      let url = '/products/products/';
      const params = new URLSearchParams();
      
      if (searchTerm) params.append('search', searchTerm);
      if (categoryFilter) params.append('category', categoryFilter);
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      
      const response = await api.get(url);
      return response.data;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await api.get('/products/categories/');
      return response.data;
    }
  });

  const handleQuantityChange = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantities(prev => ({ ...prev, [product.id]: 0 }));
      toast({
        title: "Added to cart",
        description: `${quantity} ${product.unit}(s) of ${product.title} added to your cart.`
      });
    }
  };

  const handleAddProduct = () => {
    setEditProductId(null);
    setIsAddProductModalOpen(true);
  };

  const handleEditProduct = (productId: number) => {
    setEditProductId(productId);
    setIsAddProductModalOpen(true);
  };

  const handleProductFormClose = (wasUpdated: boolean) => {
    setIsAddProductModalOpen(false);
    setEditProductId(null);
    if (wasUpdated) {
      refetch();
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Products</h1>
          {isAuthenticated && user?.user_type === 'seller' && (
            <Button onClick={handleAddProduct} className="flex items-center gap-2">
              Add Product
            </Button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
          
          <div className="flex gap-2 items-center">
            <Filter size={18} className="text-gray-500" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Categories</option>
              {categories.map((category: any) => (
                <option key={category.id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin h-8 w-8 text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500">No products found</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <Card key={product.id} className="overflow-hidden h-full flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {product.title}
                  </CardTitle>
                  <div className="flex items-center mt-1">
                    <Tag size={14} className="mr-1 text-gray-500" />
                    <span className="text-sm text-gray-500">{product.category_name}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <p className="line-clamp-3 text-sm text-gray-600 mb-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold mt-3">${product.price}</p>
                  <div className="text-sm text-gray-500 mt-1">
                    {product.quantity_available} {product.unit} available
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Seller: {product.seller_name}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex flex-col gap-3 border-t p-4">
                  {isAuthenticated && user?.id === product.id && user?.user_type === 'seller' ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEditProduct(product.id)}
                      className="w-full"
                    >
                      Edit Product
                    </Button>
                  ) : (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(product.id, -1)}
                          disabled={!quantities[product.id]}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-2 min-w-[3rem] text-center">
                          {quantities[product.id] || 0}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => handleAddToCart(product)}
                        disabled={!quantities[product.id]}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {isAddProductModalOpen && (
        <ProductForm 
          productId={editProductId} 
          onClose={handleProductFormClose} 
        />
      )}
    </Layout>
  );
};

export default Products;
