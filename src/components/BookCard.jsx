import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link to={`/details/${book.id}`}>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg 
      overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300 
      text-white cursor-pointer">

        {/* ✅ FIXED IMAGE (NO CROPPING) */}
        <div className="bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="h-[250px] object-contain p-3"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="font-bold text-lg line-clamp-1">
            {book.title}
          </h2>

          <p className="text-gray-300 text-sm">
            {book.author}
          </p>

          <p className="text-sm mt-2 line-clamp-2">
            {book.description?.slice(0, 80)}...
          </p>

          <p className="mt-2 text-yellow-400 font-semibold">
            ⭐ {book.rating}
          </p>

          <p className="text-xs bg-blue-500 inline-block px-2 py-1 rounded mt-2 capitalize">
            {book.category}
          </p>

          <p className="mt-3 text-blue-400 text-sm hover:underline">
            View Details →
          </p>
        </div>

      </div>
    </Link>
  );
}