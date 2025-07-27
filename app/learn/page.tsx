import Navigation from "@/components/navigation"
import Link from "next/link"
import Footer from "@/components/footer"

export default function Learn() {
  const resources = [
    {
      category: "Fundamentals",
      items: [
        { title: "Extremist Code Review Practices", type: "Guide", difficulty: "Intermediate" },
        { title: "Advanced Git Workflows", type: "Tutorial", difficulty: "Advanced" },
        { title: "Clean Architecture Principles", type: "Article", difficulty: "Intermediate" },
      ],
    },
    {
      category: "Open Source",
      items: [
        { title: "Contributing to OSS: A Complete Guide", type: "Course", difficulty: "Beginner" },
        { title: "Maintaining Open Source Projects", type: "Workshop", difficulty: "Advanced" },
        { title: "License Selection and Legal Considerations", type: "Guide", difficulty: "Intermediate" },
      ],
    },
    {
      category: "Advanced Topics",
      items: [
        { title: "Distributed Systems Design", type: "Series", difficulty: "Expert" },
        { title: "Performance Optimization Techniques", type: "Tutorial", difficulty: "Advanced" },
        { title: "Security-First Development", type: "Course", difficulty: "Advanced" },
      ],
    },
  ]

  const workshops = [
    {
      title: "Code Review Masterclass",
      date: "Every Tuesday",
      time: "7:00 PM UTC",
      description: "Deep dive into effective code review practices and tools.",
    },
    {
      title: "Open Source Office Hours",
      date: "Every Friday",
      time: "6:00 PM UTC",
      description: "Get help with your OSS contributions and project ideas.",
    },
    {
      title: "Architecture Design Sessions",
      date: "Bi-weekly",
      time: "8:00 PM UTC",
      description: "Collaborative system design and architecture discussions.",
    },
  ]

  return (
    <div className="min-h-screen text-white">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn & Grow</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive resources, tutorials, and workshops created by our community to help you level up your
              skills.
            </p>
          </div>

          {/* Learning Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-red-400">Learning Resources</h2>
            <div className="space-y-8">
              {resources.map((category, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold mb-6 text-white">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-red-500/30 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-white text-sm">{item.title}</h4>
                          <span className="text-xs text-red-400 bg-red-500/20 px-2 py-1 rounded">{item.type}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            item.difficulty === "Beginner"
                              ? "bg-green-500/20 text-green-400"
                              : item.difficulty === "Intermediate"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : item.difficulty === "Advanced"
                                  ? "bg-orange-500/20 text-orange-400"
                                  : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {item.difficulty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshops & Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-red-400">Workshops & Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold mb-3 text-white">{workshop.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {workshop.time}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{workshop.description}</p>
                  <button className="w-full py-2 border border-red-500 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm font-medium">
                    Join Workshop
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Community Contributions */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-12 border border-white/10 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">Share Your Knowledge</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Have expertise to share? Create tutorials, write guides, or host workshops for the community. Teaching
              others is one of the best ways to solidify your own understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Become a Contributor
              </Link>
              <button className="px-8 py-4 border border-red-500 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300">
                Submit Content
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
