import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const {  data } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  const applyFilters = () => {
    let filteredProducts = data;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseFloat(selectedPrice)
      );
    }
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProducts;
  };
  return (
    <>
      <div className="px-20 flex py-2 justify-between  mb-4">
        {/* Category Filter */}
        <div className="flex gap-2">
          <div className=" px-2 py-2 text-lg rounded-md bg-blue-gray-200">
            <label htmlFor="category">Category : </label>
            <select
              className="px-2 py-1 rounded shadow-lg"
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="dining-room">Dining-room</option>
              <option value="living-room">living-room</option>
              <option value="office-room">office-room</option>
              <option value="bed-room">bed-room</option>
              <option value="kids-room">kids-room</option>
              <option value="outdoor">outdoor</option>
              <option value="entertainment">entertainment</option>
              <option value="wall-art">wall-art</option>
              {/* Add more categories based on your data */}
            </select>
          </div>

          {/* Price Filter */}
          <div className="px-2 py-2 text-lg rounded-md bg-blue-gray-200">
            <label htmlFor="price">Price : </label>
            <input
              className="rounded px-2"
              type="range"
              id="price"
              min="500"
              max="10000"
              step="500"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <span className="ml-2">${selectedPrice}</span>
          </div>
        </div>

        {/* search */}
        <div className="px-2 py-1 text-black  rounded-md border border-black">
          <input
            placeholder="Search..."
            className="rounded  px-2 py-1"
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className=" grid grid-cols-5 px-20 gap-7 py-5">
        {applyFilters().map((e) => {
          return (
            <>
              <div class="bg-white w-64 shadow-2xl border rounded-xl">
                <img
                  src={e.image}
                  alt="Productimage"
                  class="h-72 w-64 object-cover rounded-t-xl"
                />

                <div class="px-4 py-3 w-64">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {e.name}
                  </p>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      ${e.price}
                    </p>
                    <del>
                      <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto">
                      <Button
                        variant="gradiant"
                        size="sm"
                        color="pink"
                        onClick={() => {
                          handleClick(e.id);
                        }}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Product;
