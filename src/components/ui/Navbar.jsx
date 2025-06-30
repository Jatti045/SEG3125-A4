import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { cart } = useShoppingCart();

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("drawer-nav");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  const location = useLocation();

  return (
    <div className={"drawer drawer-end"}>
      <input id="drawer-nav" type="checkbox" className="drawer-toggle" />
      <div className={"drawer-content flex flex-col"}>
        <nav className="navbar fixed z-2 top-0 bg-base-100 shadow px-10">
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
              <li className={"dropdown dropdown-hover"} tabIndex={0}>
                <Link to="/shop" onClick={closeDropdown} onMouseEnter={() => setIsDropdownOpen(true)}>
                  Shop <ChevronDown className="inline-block ml-1 w-4 h-4" />
                </Link>
                {isDropdownOpen && (
                  <ul
                    tabIndex={0}
                    className="dropdown-content !mt-0 menu bg-base-100 rounded-box w-52 shadow-sm font-regular text-md"
                  >
                    <li
                      className={`${
                        location.search.includes("cards") ? "bg-gray-200" : ""
                      }`}
                    >
                      <Link to="/shop/?cagetory=cards" onClick={closeDropdown}>
                        Playing Cards
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.search.includes("dice") ? "bg-gray-200" : ""
                      }`}
                    >
                      <Link to="/shop/?category=dice" onClick={closeDropdown}>
                        Dice Sets
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.search.includes("board_games")
                          ? "bg-gray-200"
                          : ""
                      }`}
                    >
                      <Link
                        to="/shop/?category=board_games"
                        onClick={closeDropdown}
                      >
                        Board Games
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.search.includes("rpg") ? "bg-gray-200" : ""
                      }`}
                    >
                      <Link to="/shop/?category=rpg" onClick={closeDropdown}>
                        Role Playing Games
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.search.includes("puzzle_games")
                          ? "bg-gray-200"
                          : ""
                      }`}
                    >
                      <Link
                        to="/shop/?category=puzzle_games"
                        onClick={closeDropdown}
                      >
                        Puzzle Games
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.search.includes("trivia_games")
                          ? "bg-gray-200"
                          : ""
                      }`}
                    >
                      <Link
                        to="/shop/?category=trivia_games"
                        onClick={closeDropdown}
                      >
                        Trivia Games
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/about" onClick={closeDropdown}>About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeDropdown}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end space-x-2 lg:space-x-1">
            <button className="btn btn-ghost">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="btn btn-ghost indicator">
              <ShoppingCart className="w-5 h-5" />
              <span className="badge badge-sm badge-primary indicator-item">
                {cart && cart.length}
              </span>
            </Link>
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
      <div className="drawer-side z-3">
        <label
          htmlFor="drawer-nav"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <label
          className={"absolute top-4 right-4 z-10 text-xl cursor-pointer text-gray-600"}
          htmlFor="drawer-nav"
          aria-label="close sidebar"
        >x</label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-10">
          <li>
            <Link className={"font-bold text-2xl"} to="/shop" onClick={closeDrawer}>
              Shop
            </Link>
            <ul>
              <li>
                <Link className={"font-regular text-lg"} to="/shop/?category=cards" onClick={closeDrawer}>
                  Playing Cards
                </Link>
              </li>
              <li>
                <Link className={"font-regular text-lg"} to="/shop/?category=dice" onClick={closeDrawer}>
                  Dice Sets
                </Link>
              </li>
              <li>
                <Link
                  className={"font-regular text-lg"}
                  to="/shop/?category=board_games"
                  onClick={closeDrawer}
                >
                  Board Games
                </Link>
              </li>
              <li>
                <Link className={"font-regular text-lg"} to="/shop/?category=rpg" onClick={closeDrawer}>
                  Role Playing Games
                </Link>
              </li>
              <li>
                <Link
                  className={"font-regular text-lg"}
                  to="/shop/?category=puzzle_games"
                  onClick={closeDrawer}
                >
                  Puzzle Games
                </Link>
              </li>
              <li>
                <Link
                  className={"font-regular text-lg"}
                  to="/shop/?category=trivia_games"
                  onClick={closeDrawer}
                >
                  Trivia Games
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className={"font-bold w-full text-2xl"} to="/about" onClick={closeDrawer}>
              About
            </Link>
          </li>
          <li className={"w-full"}>
            <Link className={"font-bold text-2xl w-full"} to="/contact" onClick={closeDrawer}>
                Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
