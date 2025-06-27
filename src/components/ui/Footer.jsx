import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white">STAY IN THE GAME</h2>
        <p className="mt-4 text-lg">
          Get the latest releases, exclusive deals, and gaming news delivered
          straight to your inbox
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none"
          />
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-r-md hover:bg-red-600">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white">
              <span className="text-red-500">GAME</span>VAULT
            </h3>
            <p className="mt-4 text-sm">
              Your ultimate destination for board games, card games, and gaming
              accessories. Discover epic adventures and strategic challenges.
            </p>
            <div className="mt-4 flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white uppercase">Shop</h4>
            <ul className="mt-4 space-y-2">
              {[
                "Playing Cards",
                "Dice Sets",
                "Board Games",
                "Role Playing Games",
                "Puzzle Games",
                "Trivia Games",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white uppercase">
              Support
            </h4>
            <ul className="mt-4 space-y-2">
              {[
                "Contact Us",
                "FAQs",
                "Shipping Info",
                "Returns & Exchanges",
                "Track Your Order",
                "Retailer Portal",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white uppercase">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm">
              Subscribe to get special offers, free giveaways, and the latest
              game releases.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 mb-3 bg-gray-800 rounded-md focus:outline-none placeholder-gray-500"
              />
              <button className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-sm">&copy; 2024 GameVault. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a key={link} href="#" className="text-sm hover:text-white">
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
