
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Menu, X, ShoppingCart, Bell } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const showLoginPrompt = () => {
    toast({
      title: "Login required",
      description: "Please sign in or register to access this feature.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-agro-green-600 text-white p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 2H9a1 1 0 0 0-.8.4L4.6 7.8a1 1 0 0 0 0 1.2L8.2 14" />
                  <path d="m15 9 5-7H9" />
                  <path d="M9.5 14.4 5.9 19.6a1 1 0 0 0 0 1.2L9.5 22h5l5.5-7.8a1 1 0 0 0 0-1.2L15.5 8" />
                  <path d="M13.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                </svg>
              </div>
              <span className="text-xl font-bold hidden sm:inline">AgroTrade</span>
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex relative w-full max-w-md mx-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products, suppliers..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-agro-green-500 focus:border-agro-green-500"
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="hidden md:flex bg-agro-green-600 hover:bg-agro-green-700">
              <Link to="/register">Register</Link>
            </Button>

            <Button variant="ghost" size="icon" onClick={showLoginPrompt}>
              <Bell size={20} />
            </Button>
            <Button variant="ghost" size="icon" onClick={showLoginPrompt}>
              <ShoppingCart size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search size={20} />
            </Button>

            {/* Profile menu would go here once user is logged in */}
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="block px-4 py-2 rounded-md hover:bg-secondary" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="block px-4 py-2 rounded-md hover:bg-secondary" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link to="/suppliers" className="block px-4 py-2 rounded-md hover:bg-secondary" onClick={() => setIsMenuOpen(false)}>
                Suppliers
              </Link>
              <Link to="/login" className="block px-4 py-2 rounded-md hover:bg-secondary" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="block px-4 py-2 rounded-md hover:bg-secondary" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Categories Nav */}
      <div className="hidden md:block border-b bg-white">
        <div className="container">
          <nav className="flex overflow-x-auto py-2 space-x-6">
            <Link to="/products/grains" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Grains
            </Link>
            <Link to="/products/fruits" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Fruits
            </Link>
            <Link to="/products/vegetables" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Vegetables
            </Link>
            <Link to="/products/seeds" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Seeds
            </Link>
            <Link to="/products/fertilizers" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Fertilizers
            </Link>
            <Link to="/products/equipment" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Equipment
            </Link>
            <Link to="/products/dairy" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Dairy
            </Link>
            <Link to="/products/livestock" className="whitespace-nowrap text-sm font-medium py-2 border-b-2 border-transparent hover:border-agro-green-600">
              Livestock
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-agro-brown-100">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AgroTrade</h3>
              <p className="text-sm text-gray-600 mb-4">
                Connecting farmers, suppliers, and buyers in a seamless marketplace for agricultural products.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products/grains" className="text-gray-600 hover:text-agro-green-700">Grains</Link></li>
                <li><Link to="/products/fruits" className="text-gray-600 hover:text-agro-green-700">Fruits</Link></li>
                <li><Link to="/products/vegetables" className="text-gray-600 hover:text-agro-green-700">Vegetables</Link></li>
                <li><Link to="/products/seeds" className="text-gray-600 hover:text-agro-green-700">Seeds</Link></li>
                <li><Link to="/products/equipment" className="text-gray-600 hover:text-agro-green-700">Equipment</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Business</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/seller" className="text-gray-600 hover:text-agro-green-700">Sell on AgroTrade</Link></li>
                <li><Link to="/enterprise" className="text-gray-600 hover:text-agro-green-700">Enterprise Solutions</Link></li>
                <li><Link to="/logistics" className="text-gray-600 hover:text-agro-green-700">Logistics Partners</Link></li>
                <li><Link to="/advertising" className="text-gray-600 hover:text-agro-green-700">Advertise With Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact & Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="text-gray-600 hover:text-agro-green-700">Contact Us</Link></li>
                <li><Link to="/help" className="text-gray-600 hover:text-agro-green-700">Help Center</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-agro-green-700">FAQ</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-agro-green-700">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AgroTrade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
