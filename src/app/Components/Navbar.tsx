import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-800">Comforty</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li><a href="#" className="hover:text-teal-500">Shop</a></li>
          <li><a href="#" className="hover:text-teal-500">Product</a></li>
          <li><a href="#" className="hover:text-teal-500">Pages</a></li>
          <li><a href="#" className="hover:text-teal-500">About</a></li>
        </ul>

        {/* Contact and Cart */}
        <div className="flex items-center space-x-6">
          <span className="hidden md:block text-gray-600">
            Contact: (800) 555-0111
          </span>
          <button className="relative">
            <img src="/cart-icon.png" alt="Cart" className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
   
  );
};

export default Navbar;

