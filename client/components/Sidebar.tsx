"use client"
import Link from 'next/link'
import React from 'react';
import LogoImage from '../app/assets/images/eco-logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const Sidebar = () => {
    const pathname = usePathname();
  return (
      <div className="w-1/5 bg-[#111827] p-4 text-white">
          {/* Logo */}
          <div className="flex items-start justify-start mb-6 gap-6 border-b-2">
              <Image src={LogoImage} alt="Logo" width={40} height={40} className=" bg-white" />
              <h1 className='text-white '>Multimarkt</h1>
          </div>

          {/* Button Links */}
          <div className="mb-6 flex flex-col justify-end ">
              <Link href="/admin/dashboard" className={`
              block py-2 
              pl-2 text-gray-400 rounded-lg
             hover:text-white hover:bg-teal-600
             ${pathname === '/admin/dashboard' ?'bg-teal-800 text-white':''}
                `}>
                  Products
              </Link>
              <Link href="/admin/reviewers" className={`
              block py-2 
              pl-2 text-gray-400 rounded-lg
             hover:text-white hover:bg-teal-600
             ${pathname === '/admin/reviewers' ? 'bg-teal-800 text-white' : ''}
                `}>
                  Reviewers
              </Link>
              <Link href="/admin/addproduct" className={`
              block py-2 
              pl-2 text-gray-400 rounded-lg
             hover:text-white hover:bg-teal-600
             ${pathname === '/admin/addproduct' ? 'bg-teal-800 text-white' : ''}
                `}>
                  Add Product
              </Link>
          </div>

          {/* Exit Button */}
          <div className="flex flex-col justify-end mt-[160%]">
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
                  Exit      {`->`}
              </button>
          </div>
      </div>
  )
}

export default Sidebar