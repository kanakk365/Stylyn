import React from 'react';

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  href: string;
}

const Men: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: 'oversized-tshirts',
      title: 'Oversized T-Shirts',
      image: 'https://images.pexels.com/photos/6069955/pexels-photo-6069955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'oversized-t-shirts-for-men',
      href: '/men/oversized-tshirts'
    },
    {
      id: 'joggers',
      title: 'Joggers',
      image: 'https://images.pexels.com/photos/9499128/pexels-photo-9499128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'men joggers',
      href: '/men/joggers'
    },
    {
      id: 'cargos',
      title: 'Cargos',
      image: 'https://images.pexels.com/photos/9695913/pexels-photo-9695913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'cargos-for-men',
      href: '/men/cargos'
    },
    {
      id: 'shirts',
      title: 'Shirts',
      image: 'https://images.pexels.com/photos/6627106/pexels-photo-6627106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'men-shirts',
      href: '/men/shirts'
    },
    {
      id: 'shoes',
      title: 'Shoe',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'men pajamas',
      href: '/men/pajamas'
    },
    {
      id: 'accessories',
      title: 'Accessories',
      image: 'https://images.pexels.com/photos/31359433/pexels-photo-31359433/free-photo-of-black-and-white-portrait-with-unique-hairstyle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'men-shorts',
      href: '/men/shorts'
    }
  ];  return (
    <section className="py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl"><h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Shop by Category - Men
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

export default Men;