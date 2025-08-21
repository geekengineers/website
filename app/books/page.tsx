import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Books() {
  const books = [
    {
      url: "#",
      title: "Extremist Code Review Practices",
      description:
        "Explore advanced techniques and strategies for performing code reviews effectively. This book covers both the mindset and practical tools needed to improve code quality in large-scale projects. Includes real-world examples and tips from industry experts.",
      thumbnail: "https://picsum.photos/seed/book1/250/300",
      downloadLink: "#",
    },
    {
      url: "#",
      title: "Advanced Git Workflows",
      description:
        "Master complex Git workflows such as GitFlow, feature branching, and rebasing strategies. Learn how to optimize collaboration across teams, resolve merge conflicts efficiently, and maintain a clean project history. Ideal for developers working in professional environments.",
      thumbnail: "https://picsum.photos/seed/book2/250/300",
      downloadLink: "#",
    },
    {
      url: "#",
      title: "Clean Architecture Principles",
      description:
        "Understand the principles of clean architecture and how to apply them to software development. This book provides insights into creating maintainable, scalable, and testable applications, while separating concerns and enforcing best practices in your codebase.",
      thumbnail: "https://picsum.photos/seed/book3/250/300",
      downloadLink: "#",
    },
    {
      url: "#",
      title: "Distributed Systems Design",
      description:
        "Dive into the world of distributed systems with a focus on reliability, scalability, and performance. Learn about common design patterns, fault tolerance strategies, and real-world system architectures that handle high loads and ensure data consistency.",
      thumbnail: "https://picsum.photos/seed/book4/250/300",
      downloadLink: "#",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Books Library
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our curated collection of books covering development,
              architecture, and open-source topics.
            </p>
          </div>

          {/* Books Grid */}
          <div className="space-y-8">
            {books.map((book, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col md:flex-row items-start gap-6"
              >
                {/* Thumbnail */}
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-full md:w-32 h-auto rounded-lg object-cover flex-shrink-0"
                />

                {/* Title & Description */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <a href={book.url}>
                      <h3 className="text-lg font-semibold mb-2 text-white hover:text-primary">
                        {book.title}
                      </h3>
                    </a>
                    <p className="text-gray-300 text-sm">{book.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
