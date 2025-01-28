"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { Tooltip } from "antd";

interface NavItem {
  label: string;
  href: string;
}

const navigation: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#why-us" },
  { label: "Sobre a casa", href: "#sobre-casa" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="bg-gray-800 text-white text-xl font-bold">
                  <Image
                    src="/logo dauhma bata branco.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    className=""
                  />
                </span>
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
                className="relative text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700/10 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-purple-200 transition-all duration-300 ease-in-out transform hover:scale-110">
            <Tooltip title="Procurar (ferramenta em desenvolvimento)">
              <Search className="h-5 w-5" />
            </Tooltip>
            </button>
            <button className="text-white hover:text-purple-200 transition-all duration-300 ease-in-out transform hover:scale-110">
              <Tooltip title="Login (ferramenta em desenvolvimento)">
              <User className="h-5 w-5" />
              </Tooltip>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-200 hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="h-6 w-6 transform transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-300 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center">
              <Tooltip title="Login">
                <Search className="h-5 w-5 transition-transform duration-300 hover:scale-110 cursor-pointer" />
              </Tooltip>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Tooltip title="Carrinho">
                  <User className="h-5 w-5 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
