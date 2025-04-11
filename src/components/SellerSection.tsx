
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const SellerSection = () => {
  return (
    <section className="py-16 bg-agro-green-100">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Expand Your Agricultural Business?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Join thousands of successful sellers on AgroTrade and connect with buyers from around the world. 
              Our platform provides the tools and reach you need to grow your agricultural business.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-agro-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Global Reach</h4>
                  <p className="text-gray-600 text-sm">Connect with buyers from over 150 countries</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-agro-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Secure Payments</h4>
                  <p className="text-gray-600 text-sm">Escrow system protects both buyers and sellers</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-agro-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Business Tools</h4>
                  <p className="text-gray-600 text-sm">Inventory management, analytics, and marketing tools</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-agro-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Dedicated Support</h4>
                  <p className="text-gray-600 text-sm">Expert team to assist with onboarding and growth</p>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-agro-green-600 hover:bg-agro-green-700 text-white px-8">
              <Link to="/seller/register">Start Selling Today</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-agro-green-100 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                      <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 14L11 10L15 14L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Grow Your Sales</h3>
                  <p className="text-gray-600 text-sm">
                    Access new markets and customers to expand your business beyond local boundaries.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-agro-green-100 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Global Presence</h3>
                  <p className="text-gray-600 text-sm">
                    Showcase your products to international buyers and distributors.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6 mt-6 md:mt-12">
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-agro-green-100 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                      <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 4L2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 20L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 22L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Efficient Operations</h3>
                  <p className="text-gray-600 text-sm">
                    Streamline your sales process with integrated tools and dashboards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-agro-green-100 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                      <path d="M20.9099 19.01L15.9099 14.01C15.9099 14.01 14.9099 15.01 13.9099 15.01C12.9099 15.01 11.9099 14.01 11.9099 13.01C11.9099 12.01 12.9099 11.01 13.9099 11.01C14.9099 11.01 15.9099 12.01 15.9099 12.01L20.9099 7.01C21.2899 6.63 21.3199 5.97 20.9099 5.53L18.4699 3.09C18.0699 2.69 17.3899 2.69 16.9899 3.09L11.9899 8.09C11.9899 8.09 12.9899 9.09 12.9899 10.09C12.9899 11.09 11.9899 12.09 10.9899 12.09C9.98991 12.09 8.98991 11.09 8.98991 10.09C8.98991 9.09 9.98991 8.09 9.98991 8.09L4.98991 3.09C4.56991 2.67 3.92991 2.67 3.50991 3.09L1.07991 5.52C0.659906 5.94 0.659906 6.58 1.07991 7L6.06991 12C6.06991 12 7.06991 11 8.06991 11C9.06991 11 10.0699 12 10.0699 13C10.0699 14 9.06991 15 8.06991 15C7.06991 15 6.06991 14 6.06991 14L1.06991 19C0.66991 19.39 0.66991 20.05 1.06991 20.45L3.51991 22.9C3.95991 23.34 4.63991 23.32 5.01991 22.94L10.0199 17.94C10.0199 17.94 9.01991 16.94 9.01991 15.94C9.01991 14.94 10.0199 13.94 11.0199 13.94C12.0199 13.94 13.0199 14.94 13.0199 15.94C13.0199 16.94 12.0199 17.94 12.0199 17.94L17.0199 22.94C17.4399 23.36 18.0799 23.36 18.4999 22.94L20.9399 20.5C21.3699 20.1 21.3499 19.42 20.9099 19.01Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Network Connections</h3>
                  <p className="text-gray-600 text-sm">
                    Build relationships with buyers, logistics partners, and other stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
