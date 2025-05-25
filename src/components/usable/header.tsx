import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

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
    <div className="bg-neutral-400 shadow-md shadow-black border-black sticky top-0 m-2 backdrop-blur-3xl rounded-md flex-1 flex-nowrap">
      <div className="flex px-6 py-3 mb-2 justify-between items-center mx-2">
        <div>
          <Link className="font-bold text-2xl text-orange-800" to={"/"}>
            ChatApp
          </Link>
        </div>
        <div className="hidden md:flex gap-4 ">
          {navLinks.map((link, idx) => (
            <nav key={idx} className="">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `py-1 px-2 rounded-md transition-all ${
                    isActive ? "bg-rose-700 text-white" : "hover:bg-rose-700"
                  }`
                }>
                {link.name}
              </NavLink>
            </nav>
          ))}
        </div>

        <div className="ml-4 flex items-center justify-center text-center gap-4">
          <div className="">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button>Login</Button>
            </SignedOut>
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
                  isActive ? "bg-rose-700 text-white" : "hover:bg-rose-700"
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
