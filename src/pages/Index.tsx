
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import SellerSection from "../components/SellerSection";
import StatisticsSection from "../components/StatisticsSection";
import TestimonialSection from "../components/TestimonialSection";
import CtaSection from "../components/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <StatisticsSection />
      <SellerSection />
      <TestimonialSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
