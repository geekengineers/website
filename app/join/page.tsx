"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    experience: "",
    interests: "",
    contribution: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join GeekEngineers</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to level up your skills and contribute to meaningful open source projects? Join our community of
              passionate developers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-red-400">Application Form</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="github" className="block text-sm font-medium mb-2 text-gray-300">
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="https://github.com/yourusername"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium mb-2 text-gray-300">
                    Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-2 years)</option>
                    <option value="intermediate">Intermediate (2-5 years)</option>
                    <option value="advanced">Advanced (5+ years)</option>
                    <option value="expert">Expert (10+ years)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium mb-2 text-gray-300">
                    Technical Interests *
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    required
                    rows={3}
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-400 resize-none"
                    placeholder="What technologies, languages, or areas of software development interest you most?"
                  />
                </div>

                <div>
                  <label htmlFor="contribution" className="block text-sm font-medium mb-2 text-gray-300">
                    How would you like to contribute? *
                  </label>
                  <textarea
                    id="contribution"
                    name="contribution"
                    required
                    rows={4}
                    value={formData.contribution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your goals, what you'd like to learn, teach, or contribute to the community..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Application
                </button>
              </form>
            </div>

            {/* Community Info */}
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-red-400">What to Expect</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly code review sessions and technical discussions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Collaborative open source project development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mentorship opportunities and pair programming</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to exclusive learning resources and workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Network with passionate developers worldwide</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Community Guidelines</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    <strong className="text-white">Respect & Inclusion:</strong> We welcome developers of all
                    backgrounds and skill levels.
                  </p>
                  <p>
                    <strong className="text-white">Open Source First:</strong> Commitment to contributing to and
                    supporting open source projects.
                  </p>
                  <p>
                    <strong className="text-white">Continuous Learning:</strong> Embrace a growth mindset and help
                    others learn.
                  </p>
                  <p>
                    <strong className="text-white">Quality Focus:</strong> Strive for excellence in code quality and
                    engineering practices.
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Questions?</h3>
                <p className="text-gray-300 mb-4">
                  Have questions about joining or want to learn more about our community?
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:hello@geekengineers.dev"
                    className="block text-red-400 hover:text-red-300 transition-colors"
                  >
                    info@geekengineers.ir
                  </a>
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors">
                    Join our Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
