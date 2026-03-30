import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

export default function Browse() {
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const books = useSelector((s) => s.books.books);

  const filtered = books.filter((b) =>
    (category === "all" || b.category === category) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-purple-900 to-gray-900 p-6">

      {/* Title */}
      <h1 className="text-3xl text-white mb-6 text-center capitalize">
        {category === "all" ? "All Books" : `${category} Books`}
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          placeholder="🔍 Search..."
          className="w-full max-w-xl p-3 rounded bg-white/10 text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Books */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-6">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300 mt-10">
          No books found 📭
        </p>
      )}
    </div>
  );
}