import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Details() {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.books.find((b) => b.id == id)
  );

  if (!book) return <h1 className="text-white">Book Not Found</h1>;

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6 text-white">

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg flex gap-6 w-[800px]">

        <img src={book.image} className="w-64 h-80 object-contain bg-black rounded" />

        <div>
          <h1 className="text-3xl font-bold">{book.title}</h1>

          <p className="mt-2 text-gray-300">Author: {book.author}</p>

          <p className="mt-4">{book.description}</p>

          <p className="mt-4 text-yellow-400 text-xl">⭐ {book.rating}</p>

          <p className="mt-2 bg-blue-500 inline-block px-3 py-1 rounded">
            {book.category}
          </p>

          {/* ✅ NEW FEATURE */}
          {book.link && (
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            >
              📖 View Book Online
            </a>
          )}

          <Link to="/books/all" className="block mt-4 bg-blue-500 px-4 py-2 rounded">
            ⬅ Back
          </Link>
        </div>

      </div>
    </div>
  );
}