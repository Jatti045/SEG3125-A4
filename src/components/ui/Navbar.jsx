import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-red-600">GAME</span>
              <span className="text-gray-900">VAULT</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/shop"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Shop <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <Link to="/faqs" className="text-gray-700 hover:text-gray-900">
                FAQs
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-gray-900">
                Blog
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-gray-900"
              >
                Resources
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link
                to="/contact"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Contact <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/portal" className="text-gray-700 hover:text-gray-900">
              Retailer Portal
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-gray-900">
              Account
            </Link>

            <button className="p-2 hover:text-gray-900">
              <Search className="w-6 h-6" />
            </button>

            <Link to="/cart" className="relative p-2 hover:text-gray-900">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
