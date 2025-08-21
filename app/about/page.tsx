import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen text-white">
      <Navigation />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-20">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              About the Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connecting geeks through extremist software engineering guidance.
            </p>
          </div>

          {/* Purpose Section */}
          <div className="mb-20">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative">
                {/* Optional red divider line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>

                {/* Left Column */}
                <div className="space-y-6 flex flex-col justify-between">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Geek Engineers is more than just a software engineering community—it’s a
                    space where passionate minds come together to share, learn, and build.
                    Whether you are a seasoned developer or just starting your coding journey,
                    our community welcomes everyone who is eager to explore technology,
                    problem-solving, and creativity.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    We believe that software engineering is not only about writing code but
                    also about collaboration, curiosity, and continuous growth. That’s why we
                    bring people together from around the world to exchange ideas, support one
                    another, and contribute to meaningful projects.
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-6 flex flex-col justify-between">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    From discussions on cutting-edge programming languages to practical tips
                    on building high-performance systems, Geek Engineers creates an open and
                    dynamic space for innovation. Together, we tackle real challenges,
                    experiment with bold ideas, and inspire each other to reach new heights in
                    software engineering.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Whether you’re here to collaborate on open-source projects, gain new
                    knowledge, or simply connect with like-minded engineers, this community is
                    your home. Join us, and let’s build the future of technology—one idea, one
                    line of code, and one collaboration at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-5">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
                Get in Touch
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white transition-colors">
                  Email
                </h3>
                <a
                  href="mailto:example@email.com"
                  className="text-gray-300 transition-colors hover:underline"
                >
                  info@geekengineers.ir
                </a>
              </div>

              {/* Telegram */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10  transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6  transition-colors">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white transition-colors">
                  Telegram
                </h3>
                <a
                  href="https://t.me/geek_engineers"
                  className="text-gray-300  transition-colors hover:underline"
                >
                  @geek_engineers
                </a>
              </div>

              {/* GitHub */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6  transition-colors">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white transition-colors">
                  GitHub
                </h3>
                <a
                  href="https://github.com/geekengineers"
                  className="text-gray-300  transition-colors hover:underline"
                >
                  github.com/geekengineers
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
