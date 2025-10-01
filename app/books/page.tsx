import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Books() {
  const books = [
    {
      url: "https://www.google.se/books/edition/Data_Oriented_Programming/wJB8EAAAQBAJ?hl=en&gbpv=0#",
      title: "Data Oriented Programming",
      description:
        "Eliminate the unavoidable complexity of object-oriented designs. The innovative data-oriented programming paradigm makes your systems less complex by making it simpler to access and manipulate data.",
      thumbnail: "https://images.manning.com/360/480/resize/book/0/76cfc61-95fd-4c0d-b221-0e5c3ca90583/Sharvit-DOP-HI.png",
    },
    {
      url: "https://www.amazon.se/-/en/Nora-Sandler/dp/1718500424",
      title: "Writing a C Compiler: Build a Real Programming Language from Scratch",
      description:
        "Compilers are at the heart of everything programmers do, yet even experienced developers find them intimidating. For those eager to truly grasp how compilers work, Writing a C Compiler dispels the mystery. This book guides you through a fun and engaging project where you’ll learn what it takes to compile a real-world programming language to actual assembly code.",
      thumbnail: "https://m.media-amazon.com/images/I/81U4q6BPrXL._SL1500_.jpg",
    },
    {
      url: "https://www.amazon.se/-/en/Nic-Jackson/dp/1786468662",
      title: "Building Microservices with Go: Develop seamless, efficient, and robust microservices with Go",
      description:
        "Microservice architecture is sweeping the world as the de facto pattern to build web-based applications. Golang is a language particularly well suited to building them. Its strong community, encouragement of idiomatic style, and statically-linked binary artifacts make integrating it with other technologies and managing microservices at scale consistent and intuitive. This book will teach you the common patterns and practices, showing you how to apply these using the Go programming language.",
      thumbnail: "https://m.media-amazon.com/images/I/71p7JVjaMCL._SY385_.jpg",
    },
    {
      url: "https://www.amazon.se/-/en/Thomas-Mailund/dp/1484269268",
      title: "Pointers in C Programming: A Modern Approach to Memory Management, Recursive Data Structures, Strings, and Arrays",
      description:
        "Gain a better understanding of pointers, from the basics of how pointers function at the machine level, to using them for a variety of common and advanced scenarios. This short contemporary guide book on pointers in C programming provides a resource for professionals and advanced students needing in-depth hands-on coverage of pointer basics and advanced features. It includes the latest versions of the C language, C20, C17, and C14.",
      thumbnail: "https://m.media-amazon.com/images/I/41FD3yB-pdS._SY445_SX342_.jpg",
    },
    {
      url: "https://www.oreilly.com/library/view/hands-on-dependency-injection/9781789132762/",
      title: "Hands-On Dependency Injection in Go",
      description:
        "Of the six methods introduced in this book, some are conventional, such as constructor or method injection, and some unconventional, such as just-in-time or config injection. Each method is explained in detail, focusing on their strengths and weaknesses, and is followed with a step-by-step example of how to apply it. With plenty of examples, you will learn how to leverage DI to transform code into something simple and flexible. You will also discover how to generate and leverage the dependency graph to spot and eliminate issues. Throughout the book, you will learn to leverage DI in combination with test stubs and mocks to test otherwise tricky or impossible scenarios.",
      thumbnail: "https://www.oreilly.com/covers/urn:orm:book:9781789132762/400w",
    },
    {
      url: "https://www.oreilly.com/library/view/hands-on-dependency-injection/9781789132762/",
      title: "Zero To Production In Rust: An introduction to backend development",
      description:
        "Zero To Production is the ideal starting point for your journey as a Rust backend developer. You will learn by doing: you will build a fully functional email newsletter API, starting from scratch.",
      thumbnail: "https://m.media-amazon.com/images/I/51UnrF7OupL._SY385_.jpg",
    },
    {
      url: "https://www.manning.com/books/grokking-algorithms",
      title: "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People",
      description:
        "Grokking Algorithms is a fully illustrated, friendly guide that teaches you how to apply common algorithms to the practical problems you face every day as a programmer. You'll start with sorting and searching and, as you build up your skills in thinking algorithmically, you'll tackle more complex concerns such as data compression and artificial intelligence. Each carefully presented example includes helpful diagrams and fully annotated code samples in Python.",
      thumbnail: "https://www.oreilly.com/covers/urn:orm:book:9781617292231/400w/",
    },
    {
      url: "https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/",
      title: "Concurrency in Go",
      description:
        "Concurrency can be notoriously difficult to get right, but fortunately, the Go open source programming language makes working with concurrency tractable and even easy. If you’re a developer familiar with Go, this practical book demonstrates best practices and patterns to help you incorporate concurrency into your systems.",
      thumbnail: "https://www.oreilly.com/covers/urn:orm:book:9781491941294/400w/",
    },
        {
      url: "https://nostarch.com/math-programming",
      title: "Math for Programming",
      description:
        "Every great programming challenge has mathematical principles at its heart. Whether you’re optimizing search algorithms, building physics engines for games, or training neural networks, success depends on your grasp of core mathematical concepts.",
      thumbnail: "https://m.media-amazon.com/images/I/71EMZ0rlAPL._SL1500_.jpg",
    },
        {
      url: "https://nostarch.com/blackhatgo",
      title: "Black Hat Go",
      description:
        "Like the best-selling Black Hat Python, Black Hat Go explores the darker side of the popular Go programming language. This collection of short scripts will help you test your systems, build and automate tools to fit your needs, and improve your offensive security skillset.",
      thumbnail: "https://m.media-amazon.com/images/I/81k+Ajmu4fL._SY385_.jpg",
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
