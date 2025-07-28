export const dynamic = "force-dynamic"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, Github, Send } from "lucide-react"
import { getBlogPost, getBlogPosts } from "@/lib/blog-data"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getBlogPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug)
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <div className="min-h-screen">
      <Navigation/>

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-red-500/20 text-red-300 rounded-full border border-red-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-red-400" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-red-400" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-red-400" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Share:</span>
              <button className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors group">
                <Github className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors group">
                <Send className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors group">
                <Share2 className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg !bg-gray-900/50 !border !border-white/10"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code
                        className="bg-gray-800/50 text-red-300 px-2 py-1 rounded text-sm border border-white/10"
                        {...props}
                      >
                        {children}
                      </code>
                    )
                  },
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-white mb-4 mt-8 first:mt-0">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-white mb-3 mt-6 first:mt-0">{children}</h3>
                  ),
                  p: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                  a: ({ children, href }) => (
                    <a href={href} className="text-red-400 hover:text-red-300 underline transition-colors">
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="text-gray-300 mb-4 space-y-2 list-disc list-inside">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="text-gray-300 mb-4 space-y-2 list-decimal list-inside">{children}</ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-300 my-6">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Navigation */}
          {(previousPost || nextPost) && (
            <nav className="mt-16 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {previousPost && (
                  <Link
                    href={`/blog/${previousPost.slug}`}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 text-red-400 text-sm mb-2">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Previous Post</span>
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors line-clamp-2">
                      {previousPost.title}
                    </h3>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 md:text-right"
                  >
                    <div className="flex items-center justify-end space-x-2 text-red-400 text-sm mb-2">
                      <span>Next Post</span>
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors line-clamp-2">
                      {nextPost.title}
                    </h3>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
