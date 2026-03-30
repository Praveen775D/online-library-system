import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 
    bg-black shadow-lg sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-white tracking-wide">
        📚 Online Library
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-8 text-gray-200 font-semibold">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "hover:text-blue-400 transition duration-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/books/all"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "hover:text-blue-400 transition duration-300"
          }
        >
          Browse Books
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 px-4 py-2 rounded-lg text-white"
              : "bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition duration-300"
          }
        >
          + Add Book
        </NavLink>

      </div>
    </nav>
  );
}