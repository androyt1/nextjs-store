"use client"
import Link from 'next/link'
import Image from 'next/image';
import logoImage from '../app/assets/images/eco-logo.png';
import { useState } from 'react';
import Modal from './Modal';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginPage, setLoginPage] = useState(false);
    const pathname = usePathname();
    
    const toggleMenu = () => {
        toggleExpansion(!isExpanded);
    };
    
    return (
        <div className='bg-gray-50  shadow-md'>
            <div className='container flex justify-between'>
                {/* Logo */}
                <div className='flex gap-2'>
                    <Image
                        src={logoImage}
                        width={24}
                        height={24}
                        alt='logo'
                    />
                    <h3 className='text-xl font-bold'>
                        Multimarkt
                    </h3>
                </div>

                {/* links  */}
                <div className='flex justify-between'>
                    <ul className="flex space-x-8">
                        <li className={pathname === '/' ?'text-bold text-[#0A1D37]':''}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className={pathname === '/user/shop' ? 'text-bold text-[#0A1D37]' : ''}>
                            <Link href='/user/shop'>Shop</Link>
                        </li>
                        <li className={pathname === '/user/cart' ? 'text-bold text-[#0A1D37]' : ''}>
                            <Link href='/user/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>


                {/* Icons */}
                <div className='flex justify-between space-x-4'>
   
                    <Link href="/user/cart">
                    <div className="icon-container relative">
                    <i className="ri-shopping-cart-line text-xl cursor-pointer"></i>
                    <div className="notification-circle">0</div>
                 </div>
                    </Link>
                    <Link href='/admin/dashboard' className='bg-[#0A1D37] rounded-full px-2 text-white'>Dashboard</Link>
                    <i className="ri-menu-line text-xl cursor-pointer" onClick={toggleMenu}></i>
                    <div id="menuDropdown" className={` absolute ${isExpanded ? '' : 'hidden'} bg-gray-50 p-4 rounded shadow-md right-20 top-12 z-10`}>
                        <ul className='px-4'>
                            <li>
                                <button  onClick={() => {
                                    setIsOpen(true)
                                    setLoginPage(true);
                                }}>
                                    Login
                                </button>
                            </li>
                            <li className='border-t-2 w-full'>
                                <button  onClick={() => {
                                    setIsOpen(true)
                                    setLoginPage(false);
                                }}>
                                    SignUp
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                closeModel={() => setIsOpen(false)} 
                isLoginPage={isLoginPage}
                setLoginPage={setLoginPage}
            />

        </div>
    );

}


export default Navbar;