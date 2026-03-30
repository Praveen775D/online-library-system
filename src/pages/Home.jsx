import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

export default function Home() {
  const categories = [
    { name: "tech", icon: "💻" },
    { name: "sci-fi", icon: "🚀" },
    { name: "non-fiction", icon: "📖" }
  ];

  const books = useSelector((state) => state.books.books);

  return (
    <div className="min-h-screen flex flex-col items-center 
    bg-gradient-to-r from-black via-purple-900 to-gray-900 text-white p-6">

      {/* Title */}
      <h1 className="text-5xl font-bold mb-3 mt-10">📚 Online Library</h1>
      <p className="text-gray-300 mb-10">Discover, Learn, Grow</p>

      {/* Categories */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        {categories.map((cat, i) => (
          <Link key={i} to={`/books/${cat.name}`}>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl 
            shadow-lg text-center hover:scale-105 transition duration-300">

              <h2 className="text-xl capitalize flex items-center justify-center gap-2">
                <span>{cat.icon}</span>
                {cat.name}
              </h2>

            </div>
          </Link>
        ))}
      </div>

      {/* Popular Books */}
      <h2 className="text-2xl font-semibold mb-6">⭐ Popular Books</h2>

      <div className="grid md:grid-cols-4 gap-6 w-full max-w-6xl">
        {books.slice(0, 4).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}