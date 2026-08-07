import { FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSource }) => {
  const navigate = useNavigate();

  const handleFakeStore = () => {
    setSource("fake");
    navigate("/");
  };

  const handleMongoDB = () => {
    setSource("mongodb");
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-6">

      <div className="navbar-start">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-400"
        >
          <FaShoppingBag className="text-2xl" />
          Product App
        </Link>
      </div>

      <div className="navbar-end gap-2">

        <button
          type="button"
          onClick={handleFakeStore}
          className="btn btn-secondary"
        >
          Fake Store
        </button>

        <button
          type="button"
          onClick={handleMongoDB}
          className="btn btn-primary"
        >
          MongoDB
        </button>
        <Link
          to="/add-product"
          className="btn btn-accent"
        >
          Add Product
        </Link>

      </div>
    </div>
  );
};

export default Navbar;