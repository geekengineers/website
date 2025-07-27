"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
            <Code2 className="h-8 w-8" />
            <span className="font-bold text-xl">GeekEngineers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-red-400 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-red-400 transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-white hover:text-red-400 transition-colors">
              Blog
            </Link>
            <Link href="/learn" className="text-white hover:text-red-400 transition-colors">
              Learn
            </Link>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/learn"
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
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
