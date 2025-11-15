import { useEffect, useState } from "react";
import { FaRegUser as UserIcon } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [signIn, setSignIn] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const baseHeaderClasses =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4 py-3 md:px-8 ";

  const scrollClasses = isScrolled
    ? "bg-white shadow-md text-gray-900"
    : "bg-transparent text-white";

  const navItems = [
    "Real Estate",
    "Cars",
    "Watches",
    "Yachts",
    "Jets",
    "Motorcycles",
    "Helicopters",
    "Jewelry",
    "Collectibles",
    "Rentals",
    "Journal",
  ];

  const getSubmenuContent = (item: string) => {
    if (item === "Real Estate") {
      return [
        "Luxury Homes",
        "Villas",
        "Penthouses",
        "Commercial Property",
        "Land",
      ];
    }
    if (item === "Cars") {
      return ["Sports Cars", "Classics", "SUVs", "Electric", "View All Cars"];
    }
    if (item === "Yachts") {
      return ["Motor Yachts", "Sailing Yachts", "Superyachts", "Charter"];
    }
    return ["Explore all", "Featured Items", "New Listings", "Guides"];
  };

  const mergedClasses = cn(baseHeaderClasses, scrollClasses);

  return (
    <>
      <Modal isOpen={signIn} onClose={() => setSignIn(false)} title="Log in">
        <SignInForm onSwitchToSignUp={() => {}} />
      </Modal>
      <header
        className={mergedClasses}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center space-x-3 md:space-x-4">
            <button
              className={`text-2xl transition-colors ${isScrolled ? "text-gray-900" : "text-white"} lg:hidden`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              &#9776;
            </button>

            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest cursor-pointer">
              JAMES<span className="font-normal text-lg italic">EDITION</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              className={`hidden sm:block text-sm font-semibold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              Sell With Us
            </button>
            <button
              onClick={() => setSignIn(true)}
              className={`
                        flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border 
                        ${
                          isScrolled
                            ? "text-black border-gray-800"
                            : "bg-transparent bg-opacity-40 text-white border-white hover:bg-opacity-60"
                        } 
                        transition duration-300 text-xs sm:text-sm font-semibold
                    `}
            >
              <UserIcon />
              <span className="hidden sm:inline">Log In</span>
            </button>
          </div>
        </div>

        <nav
          className={`
                hidden lg:flex max-w-7xl mx-auto mt-3 pt-3 border-t  
                ${isScrolled || hoveredItem ? "border-gray-200" : "border-white border-opacity-30"}
            `}
        >
          <ul className="flex space-x-6 text-sm">
            {navItems.map((item) => (
              <li
                key={item}
                className={
                  `opacity-70 hover:opacity-100 cursor-pointer transition duration-150 relative 
                                ${hoveredItem === item ? "opacity-100 font-bold" : ""}` // Highlight hovered item
                }
                onMouseEnter={() => setHoveredItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {hoveredItem && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-200 py-6 border-t border-gray-100 hidden lg:block">
            <div className="max-w-7xl mx-auto flex space-x-12">
              <div className="flex flex-col space-y-2 w-1/4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {hoveredItem}
                </h3>
                {getSubmenuContent(hoveredItem).map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-600 hover:text-red-600 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="w-3/4 bg-gray-50 rounded-lg p-6 flex justify-between items-center">
                <p className="text-gray-700">
                  Discover our curated collection of **
                  {hoveredItem.toLowerCase()}
                  ** listings.
                </p>

                <a
                  href="#"
                  className="text-red-600 font-semibold text-sm whitespace-nowrap"
                >
                  View Featured &rarr;
                </a>
              </div>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div
            className={`
                    lg:hidden absolute top-full left-0 w-full shadow-lg p-4 
                    ${isScrolled ? "bg-white border-t border-gray-200" : "bg-black bg-opacity-90"}
                `}
          >
            <ul className="flex flex-col space-y-2 text-sm">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`py-1 cursor-pointer hover:opacity-100 transition duration-150 
                                ${isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white opacity-90 hover:opacity-100"}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
