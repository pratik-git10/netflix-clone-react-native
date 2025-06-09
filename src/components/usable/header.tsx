import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/blog",
      name: "Blog",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-300 border-t-0 shadow-sm max-w-5xl mx-4 xl:mx-auto shadow-white sticky top-0 backdrop-blur-xs rounded-md flex-1 flex-nowrap mt-3">
      <div className="flex px-6 py-3 mb-2 justify-between items-center mx-2">
        <div>
          <NavLink className="font-bold text-2xl text-rose-3 00" to={"/"}>
            ChatApp
          </NavLink>
        </div>
        <div className="hidden md:flex gap-4 ">
          {navLinks.map((link, idx) => (
            <nav key={idx} className="">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `py-1 px-2 rounded-md transition-all font-bold ${
                    isActive
                      ? "bg-amber-300 text-black"
                      : "hover:bg-amber-400 hover:text-black"
                  }`
                }>
                {link.name}
              </NavLink>
            </nav>
          ))}
        </div>

        <div className="ml-4 flex items-center justify-center text-center gap-4">
          <div className="">
            <SignedOut>
              <div className="cursor-pointer">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="" size={30} /> : <Menu size={30} />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 px-6 pb-4">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.link}
              onClick={() => setIsOpen(false)} // close on click
              className={({ isActive }) =>
                `py-2 px-3 rounded-md transition-all ${
                  isActive ? "bg-amber-700 text-white" : "hover:bg-amber-700"
                }`
              }>
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
