import HeroSlider from "@/components/home/Hero";
import Men from "@/components/home/Men";
import Women from "@/components/home/Women";
import Outfits from "@/components/home/Outfits";
import RecommendationsSection from "@/components/home/Recommendations";
import TrendingSection from "@/components/home/Trending";

function Home() {
  return (
    <div className="w-full ">
      <HeroSlider />
      <TrendingSection />
      <Men/>
      <Women/>
      <Outfits/>
      <RecommendationsSection />
    </div>
  );
}

export default Home;
