"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-black z-10">
      <div className="md:hidden flex justify-between items-center">
        <Link href="#home">
          <span className="text-white text-xl">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/devmunro.png" />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </span>
        </Link>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
      <ul
        className={`md:flex w-full text-right justify-end md:space-x-4 p-2 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <li>
          <Link
            href="#Home"
            className="text-white block md:inline"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#Portfolio"
            className="text-white block md:inline"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="#Journey"
            className="text-white block md:inline"
            onClick={closeMenu}
          >
            Journey
          </Link>
        </li>
        <li>
          <Link
            href="#Skills"
            className="text-white block md:inline"
            onClick={closeMenu}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#Contact"
            className="text-white block md:inline"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
