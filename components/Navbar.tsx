"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SUBMIT FILM", href: "#submit" },
  { label: "PROGRAM", href: "#program" },
  { label: "TICKETS", href: "#tickets" },
  { label: "GET INVOLVED", href: "#get-involved" },
  { label: "CONTACT", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setActiveItem(label);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black border-b border-white/10" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-screen-2xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 shrink-0"
          aria-label="UN•COLONIAL FILM FESTIVAL – Home"
          onClick={() => handleNavClick("HOME")}
        >
          <Image
            src="/images/logo.png"
            alt="UN•COLONIAL FILM FESTIVAL logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="hidden sm:block text-brand-magenta font-black text-sm tracking-tightest uppercase leading-none">
            UN•COLONIAL<br />FILM FESTIVAL
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-0" role="list">
          {navItems.map((item, idx) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative text-xs font-bold tracking-widest uppercase px-3 py-2 transition-colors duration-150 hover:text-brand-magenta ${
                  activeItem === item.label
                    ? "text-brand-magenta after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-brand-magenta"
                    : "text-brand-grey"
                }`}
                onClick={() => handleNavClick(item.label)}
                aria-current={activeItem === item.label ? "page" : undefined}
              >
                {item.label}
              </a>
              {idx < navItems.length - 1 && (
                <span className="text-white/20 text-xs select-none">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#submit"
            className="hidden md:inline-block bg-brand-yellow text-black text-xs font-black uppercase tracking-widest px-4 py-2 hover:bg-brand-magenta hover:text-white transition-colors duration-150"
            onClick={() => handleNavClick("SUBMIT FILM")}
          >
            SUBMIT
          </a>

          <button
            className="xl:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`xl:hidden bg-black border-t border-white/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4" role="list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`block text-sm font-bold tracking-widest uppercase py-3 border-b border-white/10 transition-colors hover:text-brand-magenta ${
                  activeItem === item.label ? "text-brand-magenta" : "text-brand-grey"
                }`}
                onClick={() => handleNavClick(item.label)}
                aria-current={activeItem === item.label ? "page" : undefined}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#submit"
              className="block text-center bg-brand-yellow text-black text-sm font-black uppercase tracking-widest py-3 hover:bg-brand-magenta hover:text-white transition-colors"
              onClick={() => handleNavClick("SUBMIT FILM")}
              tabIndex={menuOpen ? 0 : -1}
            >
              SUBMIT YOUR FILM
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
