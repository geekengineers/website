import Link from "next/link";
import { Button } from "./ui/button";
import projectsData from "@/content/projects.json";

interface OngoingProject {
  title: string;
  description: string;
  tech: string[]; 
  github: string;
  status: string;
  progress: number;
  contributors: number;
  lastUpdate: string;
}

export default function OngoingProjects() {
  const ongoingProjects: OngoingProject[] = projectsData.ongoingProjects.map((p) => ({
    title: p.name,
    description: p.description,
    tech: p.tech,
    github: p.github,
    status: p.status,
    progress: p.progress,
    contributors: p.contributors,
    lastUpdate: p.lastUpdate,
  }));

  return (
    <section className="pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
            Ongoing Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our active open source projects and contribute to
            meaningful software that makes a difference in the developer
            community.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ongoingProjects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Active Development"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "Beta Testing"
                          ? "bg-blue-500/20 text-blue-400"
                          : project.status === "Early Development"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-purple-500/20 text-purple-400"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Last update</div>
                  <div className="text-sm text-primary">
                    {project.lastUpdate}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm text-foreground font-medium">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats & Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-400">
                      {project.contributors} contributors
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Link
                    href={project.github}
                    className="flex items-center space-x-2 text-foreground transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-12 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Want to Start a New Project?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Have an innovative idea that could benefit the developer
              community? Propose your project and gather contributors from our
              passionate community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button size="xl">Propose Project</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="xl">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
