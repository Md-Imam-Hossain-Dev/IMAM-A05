import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="section-container flex h-20 items-center justify-between">

        {/* Mobile menu */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="text-2xl text-slate-800 md:hidden"
        >
          ☰
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
        >
          <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white">
            D
          </div>

          <span className="hidden text-xl font-bold sm:block">
            <span className="gradient-text">
              Dev Stack
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="font-medium text-slate-600 hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="font-medium text-slate-600 hover:text-orange-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="font-medium text-slate-600 hover:text-orange-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="font-medium text-slate-600 hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="font-medium text-slate-600 hover:text-orange-500"
          >
            Contact
          </a>

        </div>

        {/* Auth */}
        <div className="flex items-center gap-2 sm:gap-4">

          <button className="hidden font-medium text-slate-700 sm:block">
            Sign In
          </button>

          <button className="gradient-bg rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 sm:px-5">
            Sign Up
          </button>

        </div>

      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">

          <div className="section-container flex flex-col py-4">

            <a
              href="#home"
              onClick={() =>
                setMenuOpen(false)
              }
              className="border-b border-slate-100 py-3"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() =>
                setMenuOpen(false)
              }
              className="border-b border-slate-100 py-3"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() =>
                setMenuOpen(false)
              }
              className="border-b border-slate-100 py-3"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() =>
                setMenuOpen(false)
              }
              className="border-b border-slate-100 py-3"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="py-3"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;