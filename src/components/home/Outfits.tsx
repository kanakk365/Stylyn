import React from "react";

interface OutfitItem {
  id: string;
  title: string;
  category: "men" | "women";
  image: string;
  alt: string;
  description: string;
  href: string;
}

const Outfits: React.FC = () => {
  const outfits: OutfitItem[] = [
    // Men's Outfits
    {
      id: "casual-mens-1",
      title: "Casual Street Style",
      category: "men",
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "mens-casual-street-outfit",
      description: "Oversized tee, slim jeans & sneakers",
      href: "/outfits/mens-casual-street",
    },
    {
      id: "formal-mens-1",
      title: "Business Formal",
      category: "men",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "mens-business-formal-outfit",
      description: "Crisp shirt, blazer & dress pants",
      href: "/outfits/mens-business-formal",
    },
    {
      id: "sporty-mens-1",
      title: "Active Wear",
      category: "men",
      image:
        "https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "mens-activewear-outfit",
      description: "Athletic hoodie, joggers & trainers",
      href: "/outfits/mens-activewear",
    },
    // Women's Outfits
    {
      id: "casual-womens-1",
      title: "Boho Chic",
      category: "women",
      image:
        "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "womens-boho-chic-outfit",
      description: "Flowy dress, denim jacket & boots",
      href: "/outfits/womens-boho-chic",
    },
    {
      id: "office-womens-1",
      title: "Professional Look",
      category: "women",
      image:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "womens-professional-outfit",
      description: "Blazer, blouse & pencil skirt",
      href: "/outfits/womens-professional",
    },
    {
      id: "party-womens-1",
      title: "Night Out",
      category: "women",
      image:
        "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "womens-night-out-outfit",
      description: "Cocktail dress, heels & accessories",
      href: "/outfits/womens-night-out",
    },
  ];

  const mensOutfits = outfits.filter((outfit) => outfit.category === "men");
  const womensOutfits = outfits.filter((outfit) => outfit.category === "women");
  const OutfitCard = ({ outfit }: { outfit: OutfitItem }) => (
    <div className="group cursor-pointer">
      <a
        href={outfit.href}
        title={outfit.title}
        className="block transition-transform duration-300 group-hover:scale-105"
      >
        <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={outfit.image}
            alt={outfit.alt}
            loading="lazy"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-bold mb-2">
              {outfit.title}
            </h3>
            <p className="text-gray-200 text-sm">{outfit.description}</p>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Complete Outfits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover perfectly curated outfit combinations for every occasion.
            From casual to formal, we've got your style covered.
          </p>
        </div>

        {/* Men's Outfits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Men's Outfits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mensOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))}
          </div>
        </div>

        {/* Women's Outfits */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Women's Outfits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {womensOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300">
            View All Outfits
          </button>
        </div>
      </div>
    </section>
  );
};

export default Outfits;
