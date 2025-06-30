import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import products from "@/data/products"; // adjust path as needed

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { cart } = useShoppingCart();
  const location = useLocation();

  // Filter up to 5 matching products
  useEffect(() => {
    if (searchTerm.trim()) {
      const matches = products
        .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 5);
      setSearchResults(matches);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const closeDropdown = () => setIsDropdownOpen(false);
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("drawer-nav");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="drawer drawer-end">
      <input id="drawer-nav" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <nav className="navbar fixed z-20 top-0 bg-base-100 shadow px-10">
          <div className="navbar-start">
            <Link
              to="/"
              className="link no-underline normal-case text-3xl font-black"
            >
              <span className="text-primary">GAME</span>
              <span className="text-base-content">VAULT</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-bold text-lg px-1">
              <li className="dropdown dropdown-hover" tabIndex={0}>
                <Link to="/shop">
                  <button
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={closeDropdown}
                    className="flex items-center"
                  >
                    Shop <ChevronDown className="inline-block ml-1 w-4 h-4" />
                  </button>
                </Link>
                {isDropdownOpen && (
                  <ul className="dropdown-content !mt-0 menu bg-base-100 rounded-box w-52 shadow-sm font-regular text-md">
                    {[
                      ["cards", "Playing Cards"],
                      ["dice", "Dice Sets"],
                      ["board_games", "Board Games"],
                      ["rpg", "Role Playing Games"],
                      ["puzzle_games", "Puzzle Games"],
                      ["trivia_games", "Trivia Games"],
                    ].map(([key, label]) => (
                      <li
                        key={key}
                        className={
                          location.search.includes(`category=${key}`)
                            ? "bg-gray-200"
                            : ""
                        }
                      >
                        <Link
                          to={`/shop/?category=${key}`}
                          onClick={closeDropdown}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/about" onClick={closeDropdown}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeDropdown}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end space-x-2 lg:space-x-1 relative">
            {/* Search toggle and dropdown */}
            <div className="relative">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setShowSearchInput((v) => !v);
                  setSearchTerm("");
                }}
              >
                <Search className="w-5 h-5" />
              </button>
              {showSearchInput && (
                <div className="absolute right-0 mt-2 w-64 bg-base-100 shadow-lg rounded">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Search products..."
                    autoFocus
                  />
                  {searchResults.length > 0 && (
                    <ul className="menu bg-base-100 rounded-box w-full">
                      {searchResults.map((product) => (
                        <li key={product.id}>
                          <Link
                            to={`/product/${product.id}`}
                            onClick={() => setShowSearchInput(false)}
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Cart icon with badge */}
            <Link to="/cart" className="btn btn-ghost indicator">
              <ShoppingCart className="w-5 h-5" />
              <span className="badge badge-sm badge-primary indicator-item">
                {cart?.length || 0}
              </span>
            </Link>

            {/* Mobile drawer toggle */}
            <label htmlFor="drawer-nav" className="btn btn-ghost lg:hidden">
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
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Side */}
      <div className="drawer-side z-30">
        <label htmlFor="drawer-nav" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-10">
          {/* Mobile Search Input */}
          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Search products..."
            />
            {searchResults.length > 0 && (
              <ul className="menu bg-base-200 rounded-box w-full mt-2">
                {searchResults.map((product) => (
                  <li key={product.id} onClick={closeDrawer}>
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Categories */}
          <li>
            <span className="font-bold text-2xl">Shop</span>
            <ul>
              {[
                ["cards", "Playing Cards"],
                ["dice", "Dice Sets"],
                ["board_games", "Board Games"],
                ["rpg", "Role Playing Games"],
                ["puzzle_games", "Puzzle Games"],
                ["trivia_games", "Trivia Games"],
              ].map(([key, label]) => (
                <li
                  key={key}
                  className={
                    location.search.includes(`category=${key}`)
                      ? "bg-gray-200"
                      : ""
                  }
                >
                  <Link
                    className="font-regular text-lg"
                    to={`/shop/?category=${key}`}
                    onClick={closeDrawer}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Other links */}
          <li>
            <Link
              className="font-bold w-full text-2xl"
              to="/about"
              onClick={closeDrawer}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-2xl w-full"
              to="/contact"
              onClick={closeDrawer}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
