import Navigation from "@/components/navigation"
import Link from "next/link"
import Footer from "@/components/footer"

export default function Projects() {
  const projects = [
    {
      name: "CodeReview Bot",
      description:
        "AI-powered code review automation tool that helps maintain code quality standards across repositories.",
      tech: ["TypeScript", "Node.js", "OpenAI API", "GitHub API"],
      github: "https://github.com/geekengineers/codereview-bot",
      status: "Active",
    },
    {
      name: "DevMetrics Dashboard",
      description: "Real-time analytics dashboard for tracking development team productivity and code quality metrics.",
      tech: ["React", "Next.js", "PostgreSQL", "D3.js"],
      github: "https://github.com/geekengineers/dev-metrics",
      status: "Active",
    },
    {
      name: "Terminal Toolkit",
      description: "Collection of CLI tools for developers to streamline common development workflows and tasks.",
      tech: ["Rust", "CLI", "Git", "Docker"],
      github: "https://github.com/geekengineers/terminal-toolkit",
      status: "Beta",
    },
    {
      name: "Learning Path Generator",
      description:
        "Personalized learning path generator for developers based on their current skills and career goals.",
      tech: ["Python", "FastAPI", "Machine Learning", "React"],
      github: "https://github.com/geekengineers/learning-paths",
      status: "Planning",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Source Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our community-driven projects and contribute to meaningful open source software.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "Beta"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href={project.github}
                    className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View on GitHub</span>
                  </Link>

                  {project.status === "Active" && (
                    <Link href="/join" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Contribute →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-12 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Have a Project Idea?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for new open source projects to collaborate on. Share your ideas with the community
                and let's build something amazing together.
              </p>
              <Link
                href="/join"
                className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Propose a Project
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
