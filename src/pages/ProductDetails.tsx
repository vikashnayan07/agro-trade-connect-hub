
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import api from "@/services/api";
import { Loader2, Plus, Minus, ShoppingCart, MapPin, PackageCheck, Clock } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(0);

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await api.get(`/products/products/${id}/`);
      return response.data;
    },
  });

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(0, quantity + change));
  };

  const handleAddToCart = () => {
    if (quantity > 0 && product) {
      addToCart(product, quantity);
      setQuantity(0);
      toast({
        title: "Added to cart",
        description: `${quantity} ${product.unit}(s) of ${product.title} added to your cart.`
      });
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Product not found</h2>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0].image}
                alt={product.title}
                className="max-w-full max-h-[400px] object-contain"
              />
            ) : (
              <div className="text-gray-400">No image available</div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category_name}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center text-gray-600 gap-4">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>Seller: {product.seller_name}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-gray-600">per {product.unit}</span>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="flex items-center gap-1">
                  <PackageCheck size={16} />
                  <span>Available: {product.quantity_available} {product.unit}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>Listed {new Date(product.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-b py-4 my-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between max-w-[200px]">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={!quantity}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-2 min-w-[3rem] text-center text-lg font-medium">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button
                className="w-full md:w-auto"
                size="lg"
                onClick={handleAddToCart}
                disabled={!quantity}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
