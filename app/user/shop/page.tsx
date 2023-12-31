"use client"
import Image from 'next/image'
import React, { use, useState } from 'react'
import ProductImagePage from '../../assets/images/bedroom.jpg';
import { FilterByCategory, SortByPrice, SearchProducts, Card, ShopProducts } from '@/components';


const page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Filter By Category");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      {/* Hero section */}
      <div>
      <div className=" ">
        <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-white text-bold">Products</h1>
        </div>
          <div className="relative w-full h-48">
            <Image src={ProductImagePage} className="w-full h-48 object-cover" alt="ProductPageImage" />
            <div className="absolute top-0 left-0 w-full h-48 bg-black bg-opacity-50 z-0"></div>
        </div>
        </div>
      </div>
      {/* Filter section */}
      <div className='mt-12 '>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div className='mb-4 sm:mb-0'>
              <FilterByCategory
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            <div className='flex flex-col sm:flex-row gap-4 items-center'>
              <SortByPrice
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />
              <SearchProducts
                search={search}
                setSearch={setSearch}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-15'>
        <ShopProducts
          search={search}
          maxPrice={maxPrice}
          minPrice={minPrice}
          selectedCategory={selectedCategory}
        />

      </div>
    </>
    
  )
}

export default page