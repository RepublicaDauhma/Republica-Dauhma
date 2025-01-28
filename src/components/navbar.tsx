'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navigation: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre a casa', href: '/services' },
  { label: 'Sobre nós', href: '/about' },
  { label: 'Contato', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="bg-gray-800 text-white text-xl font-bold">L</span>
              </div>
              <span className="text-xl font-bold">Logo</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-black-200 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-purple-200 transition duration-150 ease-in-out">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-purple-200 transition duration-150 ease-in-out">
              <User className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-purple-200 transition duration-150 ease-in-out relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Search className="h-5 w-5" />
                <User className="h-5 w-5" />
                <ShoppingCart className="h-5 w-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;