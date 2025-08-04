"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-background/40 backdrop-blur-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <div className="flex flex-col items-start px-8 space-y-6 mt-2">
          {["Home", "About", "Projects", "Blog", "Learn"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white text-lg hover:text-red-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            href="/join"
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            <Button size="xl" className="w-full">
              Join Us
            </Button>
          </Link>
        </div>
      </div>

      <nav className="relative z-40 flex justify-center pt-4">
        <div
          className={`w-[95%] lg:w-[95%] xl:w-[75%] z-51 transition-[backdrop-filter] duration-300 ${
            scrolled
              ? "fixed top-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg"
              : "absolute bg-transparent backdrop-blur-0 border-transparent shadow-none"
          }`}
        >
          <div className="mx-auto sm:px-6 lg:px-8 px-8">
            <div className="flex justify-between items-center h-[65px]">
              <Logo />

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-white hover:text-primary transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/learn"
                  className="text-white hover:text-primary transition-colors"
                >
                  Learn
                </Link>
                <Link href="/join">
                  <Button>Join Us</Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white transition-colors"
              >
                {isOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
