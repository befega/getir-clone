import React, { useState, useEffect } from "react";
import Products from "../api/products.json";
import ProductItem from "./ui/ProductItem";

const Favorites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
        <div className="grid grid-cols-10">
          {products.map((title, index) => (
            <ProductItem key={index} product={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
