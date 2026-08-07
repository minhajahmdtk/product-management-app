import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import AddProduct from "./components/AddProduct";

const App = () => {
  const [source, setSource] = useState("fake");

  return (
    <div>
      <Navbar setSource={setSource} />

      <Routes>
  
        <Route
          path="/"
          element={<ProductCard source={source} />}
        />
        <Route
          path="/add-product"
          element={<AddProduct />}
        />
      </Routes>
    </div>
  );
};

export default App;