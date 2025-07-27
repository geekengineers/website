import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import OngoingProjects from "@/components/ongoing-projects"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      <Hero />
      <OngoingProjects />

      {/* Purpose Section */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose GeekEngineers?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're not just another programming community. We're extremists who push the boundaries of software
              engineering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors">
                Learn & Teach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Share knowledge, mentor others, and grow together in our collaborative learning environment where every
                member contributes to the collective wisdom.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors">
                Open Source
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Contribute to meaningful projects and build your portfolio with real-world open source experience that
                makes a lasting impact on the community.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors">
                Level Up
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Push your limits with extremist software engineering practices and cutting-edge technologies that
                challenge conventional thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
