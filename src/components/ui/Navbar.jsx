import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/shop">
                Shop <ChevronDown className="inline-block ml-1 w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">
                Contact <ChevronDown className="inline-block ml-1 w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-red-500">GAME</span>
          <span className="text-gray-900">VAULT</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <Link to="/shop">
              Shop <ChevronDown className="inline-block ml-1 w-4 h-4" />
            </Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/contact">
              Contact <ChevronDown className="inline-block ml-1 w-4 h-4" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        <Link to="/portal" className="btn btn-ghost">
          Retailer Portal
        </Link>
        <Link to="/account" className="btn btn-ghost">
          Account
        </Link>
        <button className="btn btn-ghost">
          <Search className="w-5 h-5" />
        </button>
        <Link to="/cart" className="btn btn-ghost indicator">
          <ShoppingCart className="w-5 h-5" />
          <span className="badge badge-sm badge-error indicator-item">3</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
