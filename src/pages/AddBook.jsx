import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState(""); // ✅ NEW

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const submit = () => {
    if (!title || !author || !description || !image || !rating || !category || !link) {
      alert("All fields required!");
      return;
    }

    dispatch(addBook({
      id: Date.now(),
      title,
      author,
      description,
      image,
      rating,
      category,
      link // ✅ NEW
    }));

    navigate("/books/all");
  };

  return (
    <div className="min-h-screen flex justify-center items-center 
    bg-gradient-to-r from-black via-purple-900 to-gray-900">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl w-96 text-white">

        <h1 className="text-2xl mb-4">Add Book</h1>

        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
        />

        <input
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
        />

        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
        />

        {/* Image URL */}
        <input
          placeholder="Paste Image URL or Base64"
          onChange={(e) => setImage(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
        />

        <p className="text-center text-gray-400 text-sm mb-2">OR</p>

        {/* Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full mb-2"
        />

        {/* Preview */}
        {image && (
          <img
            src={image}
            alt="preview"
            className="w-full h-40 object-cover rounded mb-2"
          />
        )}

        {/* 🔥 NEW LINK INPUT */}
        <input
          placeholder="Book Link (Amazon / PDF / Website)"
          onChange={(e) => setLink(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
        />

        <input
          placeholder="Rating (1-5)"
          type="number"
          onChange={(e) => setRating(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800"
        >
          <option value="">Select Category</option>
          <option value="tech">Tech</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="non-fiction">Non-Fiction</option>
        </select>

        <button
          onClick={submit}
          className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600"
        >
          Add Book
        </button>

      </div>
    </div>
  );
}