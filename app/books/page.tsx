import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import books from "@/content/books.json";

export default function Books() {
  return (
    <div className="min-h-screen text-white bg-slate-950">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Books Library
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our curated collection of books covering development,
              architecture, and open-source topics.
            </p>
          </div>

          {/* Books Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <a 
                href={book.url} 
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Thumbnail Container */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-900">
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-3 text-white leading-tight group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-4 italic">
                    {book.description}
                  </p>
                  
                  {/* Subtle "Read More" or Link Indicator */}
                  <div className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}