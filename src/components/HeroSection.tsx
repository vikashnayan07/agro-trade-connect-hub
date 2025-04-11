
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-agro-green-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-agro-green-700/20 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              The Global Marketplace for <span className="text-agro-green-700">Agricultural Trade</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Connect directly with verified farmers, suppliers, and buyers worldwide. 
              Trade quality agricultural products with confidence and transparency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-agro-green-600 hover:bg-agro-green-700 text-white font-semibold px-8">
                <Link to="/register">Start Trading</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-agro-green-600 text-agro-green-700 hover:bg-agro-green-100">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 8.2L9.36 12.86C9.22 13.01 9.03 13.08 8.83 13.08C8.64 13.08 8.45 13.01 8.3 12.86L5.97 10.53C5.68 10.24 5.68 9.76 5.97 9.47C6.26 9.18 6.74 9.18 7.03 9.47L8.83 11.27L13.02 7.08C13.31 6.8 13.79 6.8 14.08 7.08C14.32 7.37 14.32 7.86 14.03 8.2Z" fill="currentColor" />
                </svg>
                <span className="ml-2 text-sm text-gray-600">10,000+ Verified Sellers</span>
              </div>
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.03 8.2L9.36 12.86C9.22 13.01 9.03 13.08 8.83 13.08C8.64 13.08 8.45 13.01 8.3 12.86L5.97 10.53C5.68 10.24 5.68 9.76 5.97 9.47C6.26 9.18 6.74 9.18 7.03 9.47L8.83 11.27L13.02 7.08C13.31 6.8 13.79 6.8 14.08 7.08C14.32 7.37 14.32 7.86 14.03 8.2Z" fill="currentColor" />
                </svg>
                <span className="ml-2 text-sm text-gray-600">150+ Countries Served</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transform translate-y-4">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop" alt="Grain field" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">Premium Grains</h3>
                    <p className="text-sm text-gray-500">Bulk Availability</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1470&auto=format&fit=crop" alt="Fresh Vegetables" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">Organic Vegetables</h3>
                    <p className="text-sm text-gray-500">Certified Produce</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=1470&auto=format&fit=crop" alt="Farming Equipment" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">Modern Equipment</h3>
                    <p className="text-sm text-gray-500">Latest Technology</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md transform translate-y-4">
                  <img src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=1470&auto=format&fit=crop" alt="Fresh Fruits" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">Seasonal Fruits</h3>
                    <p className="text-sm text-gray-500">Export Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
