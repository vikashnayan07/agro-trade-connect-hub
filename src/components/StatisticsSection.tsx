
import { Card, CardContent } from "@/components/ui/card";

const StatisticsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Why Choose AgroTrade</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the largest B2B agricultural marketplace connecting farmers, suppliers, and buyers worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-10 pb-8 px-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-agro-green-100 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17954 19.0078 7.01C19.0078 8.84045 17.7699 10.4368 16 10.89" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-500">Verified Suppliers</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-10 pb-8 px-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-agro-green-100 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                    <path d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 6V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-500">Countries</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-10 pb-8 px-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-agro-green-100 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                    <path d="M17.5 5C17.5 3.34315 16.1569 2 14.5 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H14.5C16.1569 22 17.5 20.6569 17.5 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 4H19.5C21.1569 4 22.5 5.34315 22.5 7V17C22.5 18.6569 21.1569 20 19.5 20H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11H7M9.5 8.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-500">Product Listings</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-10 pb-8 px-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-agro-green-100 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600">
                    <path d="M9 17V18C9 19.1046 9.89543 20 11 20H18C19.1046 20 20 19.1046 20 18V9C20 7.89543 19.1046 7 18 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M13 14H6C4.89543 14 4 13.1046 4 12V6C4 4.89543 4.89543 4 6 4H13C14.1046 4 15 4.89543 15 6V12C15 13.1046 14.1046 14 13 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">$500M+</h3>
              <p className="text-gray-500">Annual Trade Value</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
