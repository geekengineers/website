import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pb-20 lg:pt-20 pt-32 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-400/30 rounded-lg animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 border border-red-400/20 rounded-full animate-bounce"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-16 h-16 border border-red-400/25 rounded-lg rotate-45 animate-spin"
          style={{ animationDuration: "15s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Geek Engineers
            </h1>

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-primary/35 font-medium mb-6 leading-relaxed">
                "Extremist software engineering guidance for Geeks."
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join our passionate programming community where software engineers and tech enthusiasts learn, teach,
                collaborate, and level up their knowledge through open source contributions and recreational
                programming.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Link href="/join">
                <Button size="xl">Join the Community</Button>
              </Link>

              <Link href="/projects">
                <Button size="xl" variant="outline">View Projects</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary/35">2+</div>
                <div className="text-sm text-gray-400">Years Active</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary/35">OSS</div>
                <div className="text-sm text-gray-400">Focused</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary/35">∞</div>
                <div className="text-sm text-gray-400">Learning</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Modern programming workspace"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
