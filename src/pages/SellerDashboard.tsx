
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import ProductForm from "@/components/ProductForm";

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
}

const SellerDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [editProductId, setEditProductId] = useState<number | null>(null);

  useEffect(() => {
    if (!user || user.user_type !== 'seller') {
      navigate('/login');
      toast({
        title: "Access denied",
        description: "You must be logged in as a seller to view this page.",
        variant: "destructive",
      });
    }
  }, [user, navigate, toast]);

  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ['sellerProducts'],
    queryFn: async () => {
      const response = await api.get('/products/products/my-products/');
      return response.data;
    },
    enabled: !!user && user.user_type === 'seller',
  });

  const handleLogout = () => {
    logout();
    navigate('/');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
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

  if (!user || user.user_type !== 'seller') {
    return null;
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <div className="flex gap-4">
            <Button onClick={handleAddProduct} className="flex items-center gap-2">
              <Plus size={16} /> Add Product
            </Button>
            <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
              <LogOut size={16} /> Logout
            </Button>
          </div>
        </div>

        {user && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="font-semibold">Welcome, {user.first_name || user.email}!</p>
            <p className="text-sm text-gray-600">Company: {user.company_name || 'Not specified'}</p>
            <p className="text-sm text-gray-600">Business Type: {user.business_type || 'Not specified'}</p>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4">Your Products</h2>
        
        {isLoading ? (
          <div className="text-center py-8">Loading your products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="mb-4">You haven't added any products yet.</p>
            <Button onClick={handleAddProduct} className="flex items-center gap-2">
              <Plus size={16} /> Add Your First Product
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: Product) => (
              <Card key={product.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div className="truncate">{product.title}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditProduct(product.id)}
                      className="h-8 w-8"
                    >
                      <Edit size={16} />
                    </Button>
                  </CardTitle>
                  <CardDescription>{product.category_name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex justify-between mt-2">
                    <span className="font-medium">${product.price}</span>
                    <span className="text-gray-600 text-sm">
                      {product.quantity_available} {product.unit} available
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span className={product.is_active ? "text-green-600" : "text-red-600"}>
                      {product.is_active ? "Active" : "Inactive"}
                    </span>
                    {product.is_featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {isAddProductModalOpen && (
          <ProductForm 
            productId={editProductId} 
            onClose={handleProductFormClose} 
          />
        )}
      </div>
    </Layout>
  );
};

export default SellerDashboard;
