import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Mahsulot topilmadi yoki tarmoqda xato!");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-10 text-center font-sans">Yuklanmoqda...</div>;
  if (error) return <div className="p-10 text-center text-red-500 font-sans">{error}</div>;
  if (!product) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
      >
        ← Orqaga
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img 
            src={product.images[0]} 
            alt={product.title}
            className="w-full rounded-2xl shadow-md object-cover"
            onError={(e) => e.target.src = "https://via.placeholder.com/400"}
          />
        </div>


        <div className="flex-1 space-y-4">
          <span className="text-sm text-blue-600 font-bold uppercase tracking-wide">
            {product.category?.name}
          </span>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>
          
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
            Savatga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;