import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Add from './pages/AddBook'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function Layout() {
  const location = useLocation();

  // ✅ Hide Navbar if route is invalid (404)
  const validPaths = ["/", "/add"];
  const isValidRoute =
    validPaths.includes(location.pathname) ||
    location.pathname.startsWith("/books/") ||
    location.pathname.startsWith("/details/");

  return (
    <>
      {isValidRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<Browse />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}