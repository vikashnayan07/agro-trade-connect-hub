
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Register = () => {
  const [userType, setUserType] = useState("buyer");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration in progress",
      description: "Your account is being created. Please wait...",
    });
    // In a real app, you'd handle registration logic here
  };

  return (
    <Layout>
      <div className="container py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your AgroTrade Account</h1>
            <p className="text-gray-600">
              Join the largest B2B marketplace for agricultural products
            </p>
          </div>

          <Tabs defaultValue="buyer" className="w-full" onValueChange={setUserType}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="buyer">I'm a Buyer</TabsTrigger>
              <TabsTrigger value="seller">I'm a Seller</TabsTrigger>
            </TabsList>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    {userType === "buyer" 
                      ? "Create an account to start sourcing agricultural products" 
                      : "Create an account to showcase and sell your products"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="space-y-2 mb-4">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" placeholder="Confirm password" required />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" placeholder="Enter your company name" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessType">{userType === "buyer" ? "Business Type" : "Producer Type"}</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {userType === "buyer" ? (
                              <>
                                <SelectItem value="wholesaler">Wholesaler</SelectItem>
                                <SelectItem value="retailer">Retailer</SelectItem>
                                <SelectItem value="processor">Processor</SelectItem>
                                <SelectItem value="exporter">Exporter</SelectItem>
                              </>
                            ) : (
                              <>
                                <SelectItem value="farmer">Farmer</SelectItem>
                                <SelectItem value="cooperative">Cooperative</SelectItem>
                                <SelectItem value="producer">Producer</SelectItem>
                                <SelectItem value="manufacturer">Manufacturer</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-agro-green-600 hover:bg-agro-green-700">
                      Create Account
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <p className="text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-agro-green-700 font-semibold hover:underline">Log In</Link>
                  </p>
                </CardFooter>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Benefits of Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {userType === "buyer" ? (
                        <>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Access verified suppliers worldwide</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Request quotes for bulk orders</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Compare prices and quality grades</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Secure payment protection</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Track orders in real-time</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Showcase products to global buyers</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Receive direct inquiries and orders</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Manage inventory efficiently</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Secure payment guarantees</span>
                          </li>
                          <li className="flex">
                            <CheckCircle2 className="text-agro-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">Access market insights and analytics</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Our support team is available to assist you with the registration process.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-agro-green-600">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">+1 (800) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-agro-green-600">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">support@agrotrade.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
