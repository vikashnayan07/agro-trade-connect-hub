
import { Link } from "react-router-dom";
import { Grain, Leaf, Apple, Cpu, Tractor, FlaskConical, Milk, PiggyBank } from "lucide-react";

const categories = [
  {
    name: "Grains",
    icon: Grain,
    description: "Rice, wheat, maize, barley, and other cereals",
    path: "/products/grains",
    color: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    name: "Vegetables",
    icon: Leaf,
    description: "Fresh and processed vegetable varieties",
    path: "/products/vegetables",
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    name: "Fruits",
    icon: Apple,
    description: "Seasonal and exotic fruits for export",
    path: "/products/fruits",
    color: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    name: "Seeds",
    icon: Cpu,
    description: "High-quality seeds for various crops",
    path: "/products/seeds",
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    name: "Equipment",
    icon: Tractor,
    description: "Modern farming machinery and tools",
    path: "/products/equipment",
    color: "bg-gray-100",
    iconColor: "text-gray-600"
  },
  {
    name: "Fertilizers",
    icon: FlaskConical,
    description: "Organic and chemical fertilizers",
    path: "/products/fertilizers",
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    name: "Dairy",
    icon: Milk,
    description: "Milk and dairy products for wholesale",
    path: "/products/dairy",
    color: "bg-cyan-100",
    iconColor: "text-cyan-600"
  },
  {
    name: "Livestock",
    icon: PiggyBank,
    description: "Cattle, poultry, and other livestock",
    path: "/products/livestock",
    color: "bg-orange-100",
    iconColor: "text-orange-600"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of agricultural products and supplies across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.path}
              className="block group"
            >
              <div className={`${category.color} rounded-lg p-6 transition duration-300 hover:shadow-md`}>
                <div className={`${category.iconColor} mb-4`}>
                  <category.icon size={32} />
                </div>
                <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <span className="text-agro-green-700 text-sm font-medium inline-flex items-center group-hover:underline">
                  Browse Products
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
