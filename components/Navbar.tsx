"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="px-8 flex z-10 items-center rounded-full justify-between w-full max-w-4xl md:p-3 md:px-8 mx-auto my-0 mt-5 bg-white dark:bg-black sticky-nav md:my-8 bg-opacity-60">
      <div className="flex container lg:py-2 flex-wrap items-center justify-center mx-auto py-2">
        {/*
        <Link
          href={"/"}
          className="text-3xl text-white font-semibold"
        >
          PC
        </Link> 
        */}
        {/*<div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
            
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
          */}
        {/*<div className="menu hidden md:block md:w-auto" id="navbar">*/}
        <div className="menu md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {/*navbarOpen ? <MenuOverlay links={navLinks} /> : null*/}
      </div>
    </nav>
  );
};

export default Navbar;