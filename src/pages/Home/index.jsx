import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LIMIT = 6;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const offset = (page - 1) * LIMIT;
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${LIMIT + 1}`,
        );

        const data = res.data;
        if (data.length > LIMIT) {
          setHasNext(true);
          setProducts(data.slice(0, LIMIT));
        } else {
          setHasNext(false);
          setProducts(data);
        }
      } catch (err) {
        setError("Mahsulotlarni yuklashda xatolik yuz berdi.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    window.scrollTo(0, 0);
  }, [page]);

  if (loading)
    return (
      <div className="p-20 text-center text-gray-500 font-sans">
        Yuklanmoqda...
      </div>
    );
  if (error)
    return (
      <div className="p-20 text-center text-red-500 font-sans">{error}</div>
    );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-2 text-center">
            Mahsulotlar
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/prodacts/${product.id}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src={product.images[0]?.replace(/[\[\]"]/g, "")}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/400x300")
                  }
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-blue-600 transition">
                  {product.title}
                </h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-gray-900">
                    ${product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-6 py-2 border-2 border-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-black cursor-pointer"
          >
            ←
          </button>

          <span className="text-lg font-bold bg-gray-100 px-4 py-2 rounded-lg">
            {page}
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!hasNext}
            className="px-6 py-2 border-2 border-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition disabled:opacity-20 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
