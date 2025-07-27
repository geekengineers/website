"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
     <div
        className={`w-[95%] md:w-[75%] transition-colors transition-[backdrop-filter] duration-300 ${
          scrolled
            ? "bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg"
            : "bg-transparent backdrop-blur-0 border-transparent shadow-none"
        }`}
      >
        <div className="mx-auto lg:py-4 py-1 sm:px-6 lg:px-8 px-8">
          <div className="flex justify-between items-center h-[69px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
            >
              <Code2 className="h-8 w-8" />
              <span className="font-bold text-xl">GeekEngineers</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-red-400 transition-colors">Home</Link>
              <Link href="/about" className="text-white hover:text-red-400 transition-colors">About</Link>
              <Link href="/projects" className="text-white hover:text-red-400 transition-colors">Projects</Link>
              <Link href="/blog" className="text-white hover:text-red-400 transition-colors">Blog</Link>
              <Link href="/learn" className="text-white hover:text-red-400 transition-colors">Learn</Link>
              <Link
                href="/join"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Join Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-red-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10 rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Projects", "Blog", "Learn"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/join"
                className="block px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors mx-3 text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
