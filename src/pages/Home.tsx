import HeroSlider from "@/components/home/Hero";
import RecommendationsSection from "@/components/home/Recommendations";
import TrendingSection from "@/components/home/Trending";

function Home() {
  return (
    <div className="w-full ">
      <HeroSlider />
      <TrendingSection />
      <RecommendationsSection />
    </div>
  );
}

export default Home;
