
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, ShoppingCart, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-agro-green-700">
          AgroTrade
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-agro-green-700">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-agro-green-700">
            Products
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-agro-green-700">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-agro-green-700">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {isAuthenticated && (
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
          )}
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User size={16} />
                  {user?.first_name || "Account"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user?.user_type === "seller" && (
                  <DropdownMenuItem onClick={() => navigate("/seller-dashboard")}>
                    Seller Dashboard
                  </DropdownMenuItem>
                )}
                {user?.user_type === "buyer" && (
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    My Orders
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut size={16} className="mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register" className="hidden sm:inline-block">
                <Button>Register</Button>
              </Link>
            </>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
