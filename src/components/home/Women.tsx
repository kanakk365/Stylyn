import React from 'react';

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  href: string;
}

const Women: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: 'dresses',
      title: 'Dresses',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'women-dresses',
      href: '/women/dresses'
    },
    {
      id: 'tops',
      title: 'Tops',
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'women-tops',
      href: '/women/tops'
    },
    {
      id: 'jeans',
      title: 'Jeans',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'women-jeans',
      href: '/women/jeans'
    },
    {
      id: 'skirts',
      title: 'Skirts',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'women-skirts',
      href: '/women/skirts'
    },
    {
      id: 'shoes',
      title: 'Shoes',
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'women-shoes',
      href: '/women/shoes'
    },
    {
      id: 'accessories',
      title: 'Accessories',
      image: 'https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'women-accessories',
      href: '/women/accessories'
    }
  ];
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Shop by Category - Women
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <a 
                href={category.href}
                title={category.title}
                className="block transition-transform duration-300 group-hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">                  <img
                    src={category.image}
                    alt={category.alt}
                    loading="lazy"
                    className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] object-cover"
                  />                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
                    <h3 className="text-white text-base md:text-lg font-semibold">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Women;