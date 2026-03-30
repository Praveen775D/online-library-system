import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const loc = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center 
    bg-gradient-to-r from-black via-red-900 to-gray-900 text-white">

      <h1 className="text-6xl font-bold mb-4">404 🚫</h1>

      <p className="text-xl mb-2">Page Not Found</p>

      <p className="text-gray-400 mb-6">
        Invalid URL: {loc.pathname}
      </p>

      <Link
        to="/"
        className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600"
      >
        🏠 Go Home
      </Link>

    </div>
  );
}