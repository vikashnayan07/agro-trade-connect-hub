
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle } from "lucide-react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    description: "Long grain aged basmati rice with aromatic flavor",
    category: "Grains",
    seller: "Golden Harvests Ltd.",
    location: "Punjab, India",
    moq: "20 MT",
    price: "$950 - $1150",
    unit: "per MT",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1470&auto=format&fit=crop",
    rating: 4.8,
    isVerified: true,
    availableStock: "500 MT",
    discount: "5%",
  },
  {
    id: 2,
    name: "Organic Red Apples",
    description: "Fresh organic red apples, perfect for export",
    category: "Fruits",
    seller: "GreenLife Organics",
    location: "Himachal, India",
    moq: "5 MT",
    price: "$800 - $950",
    unit: "per MT",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1470&auto=format&fit=crop",
    rating: 4.6,
    isVerified: true,
    availableStock: "100 MT",
  },
  {
    id: 3,
    name: "High-Yield Wheat Seeds",
    description: "Drought-resistant wheat seeds for better yield",
    category: "Seeds",
    seller: "FarmTech Solutions",
    location: "Maharashtra, India",
    moq: "2 MT",
    price: "$1500 - $1800",
    unit: "per MT",
    image: "https://images.unsplash.com/photo-1536657689784-8ab881e807b3?q=80&w=1470&auto=format&fit=crop",
    rating: 4.9,
    isVerified: true,
    availableStock: "50 MT",
    discount: "8%",
    isFeatured: true
  },
  {
    id: 4,
    name: "Compact Tractor 40HP",
    description: "Multi-purpose compact tractor for small farms",
    category: "Equipment",
    seller: "AgriMech International",
    location: "Gujarat, India",
    moq: "1 Unit",
    price: "$7500",
    unit: "per Unit",
    image: "https://images.unsplash.com/photo-1564694571918-5e31e1f0d32d?q=80&w=1470&auto=format&fit=crop",
    rating: 4.7,
    isVerified: true,
    availableStock: "10 Units",
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover high-quality agricultural products from verified suppliers
            </p>
          </div>
          <Button asChild variant="link" className="text-agro-green-700 mt-4 md:mt-0">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  {product.isVerified && (
                    <Badge variant="secondary" className="bg-white text-agro-green-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Verified
                    </Badge>
                  )}
                  {product.discount && (
                    <Badge className="bg-red-500 text-white">
                      {product.discount} OFF
                    </Badge>
                  )}
                </div>
                {product.isFeatured && (
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-amber-500 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4 flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs bg-secondary font-normal">
                    {product.category}
                  </Badge>
                  <div className="flex items-center">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs ml-1 font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-1 hover:text-agro-green-700 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Price:</span>
                    <span className="font-semibold text-black">{product.price} <span className="text-xs text-gray-500">{product.unit}</span></span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">MOQ:</span>
                    <span className="text-sm">{product.moq}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Available:</span>
                    <span className="text-sm">{product.availableStock}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {product.location}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex justify-between gap-2">
                <Button className="flex-1 bg-agro-green-600 hover:bg-agro-green-700">
                  Get Quote
                </Button>
                <Button variant="outline" className="px-3" title="Contact Supplier">
                  <MessageCircle size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
