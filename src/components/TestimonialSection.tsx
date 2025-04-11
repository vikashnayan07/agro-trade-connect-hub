
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajiv Sharma",
    role: "Rice Exporter",
    company: "Golden Grain Exports",
    location: "Punjab, India",
    testimonial:
      "AgroTrade has transformed how we connect with international buyers. Our export volume has increased by 40% since joining the platform.",
    avatar: "/placeholder.svg",
    initials: "RS"
  },
  {
    name: "Sarah Johnson",
    role: "Purchasing Manager",
    company: "Global Food Distributors",
    location: "California, USA",
    testimonial:
      "Finding reliable suppliers used to be our biggest challenge. Now with AgroTrade, we can easily verify quality and build trusted relationships with farmers worldwide.",
    avatar: "/placeholder.svg",
    initials: "SJ"
  },
  {
    name: "Ahmed Hassan",
    role: "Organic Farm Owner",
    company: "Green Earth Organics",
    location: "Kerala, India",
    testimonial:
      "As a small organic farm, it was difficult to reach the right customers. AgroTrade has given us visibility and direct access to buyers who value our premium products.",
    avatar: "/placeholder.svg", 
    initials: "AH"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-agro-brown-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from farmers, suppliers, and buyers who have grown their businesses through AgroTrade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-md h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-agro-green-600 mb-2">
                    <path d="M9.33333 14.6667C9.33333 14.6667 10.6667 13.3333 14.6667 13.3333C18.6667 13.3333 21.3333 16 25.3333 16C29.3333 16 32 13.3333 32 13.3333V2.66667C32 2.66667 29.3333 5.33333 25.3333 5.33333C21.3333 5.33333 18.6667 2.66667 14.6667 2.66667C10.6667 2.66667 9.33333 4 9.33333 4V14.6667Z" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M0 14.6667C0 14.6667 1.33333 13.3333 5.33333 13.3333C9.33333 13.3333 12 16 16 16C20 16 22.6667 13.3333 22.6667 13.3333V2.66667C22.6667 2.66667 20 5.33333 16 5.33333C12 5.33333 9.33333 2.66667 5.33333 2.66667C1.33333 2.66667 0 4 0 4V14.6667Z" fill="currentColor"/>
                  </svg>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                </div>
                <div className="mt-auto flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-agro-green-100">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-agro-green-200 text-agro-green-700">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
