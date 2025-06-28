import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="hero bg-gray-900 text-gray-300 py-12">
        <div className="hero-content text-center">
          <div className="w-full">
            <h2 className="text-3xl font-extrabold text-white">
              STAY IN THE GAME
            </h2>
            <p className="mt-4 text-lg">
              Get the latest releases, exclusive deals, and gaming news
              delivered straight to your inbox
            </p>
            <div className="mt-6 join justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item w-full max-w-md"
              />
              <button className="btn btn-error join-item">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer px-10 py-12 bg-gray-900 text-neutral-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="footer-title">
            <span className="text-red-500">GAME</span>VAULT
          </span>
          <p className="mt-2 text-sm">
            Your ultimate destination for board games, card games, and gaming
            accessories. Discover epic adventures and strategic challenges.
          </p>
          <div className="grid grid-flow-col gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <span className="footer-title uppercase">Shop</span>
          <a href="#" className="link link-hover">
            Playing Cards
          </a>
          <a href="#" className="link link-hover">
            Dice Sets
          </a>
          <a href="#" className="link link-hover">
            Board Games
          </a>
          <a href="#" className="link link-hover">
            Role Playing Games
          </a>
          <a href="#" className="link link-hover">
            Puzzle Games
          </a>
          <a href="#" className="link link-hover">
            Trivia Games
          </a>
        </div>

        <div>
          <span className="footer-title uppercase">Support</span>
          <a href="#" className="link link-hover">
            Contact Us
          </a>
          <a href="#" className="link link-hover">
            FAQs
          </a>
          <a href="#" className="link link-hover">
            Shipping Info
          </a>
          <a href="#" className="link link-hover">
            Returns & Exchanges
          </a>
          <a href="#" className="link link-hover">
            Track Your Order
          </a>
          <a href="#" className="link link-hover">
            Retailer Portal
          </a>
        </div>

        <div>
          <span className="footer-title uppercase">Stay Updated</span>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways, and the latest game
            releases.
          </p>
          <div className="mt-4">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-error">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer px-10 py-4 border-t border-gray-700 bg-gray-900 text-gray-500">
        <p className="text-sm">© 2024 GameVault. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="link link-hover text-sm">
            Privacy Policy
          </a>
          <a href="#" className="link link-hover text-sm">
            Terms of Service
          </a>
          <a href="#" className="link link-hover text-sm">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
