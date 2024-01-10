import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
function Details() {
  const { id } = useParams();

  // const [cartData, setCartData] = useState([]);
  const { getDetail, detaildata } = useContext(ProductContext);
  // console.log(detaildata.id)

  const updateCart = async () => {
    try {
      const user_id = sessionStorage.getItem("user_id");
      const res = await axios.get(`http://localhost:5000/users?id=${user_id}`);
      const userData = res.data;

      if (userData.length === 0) {
        console.error("User not found");
        return;
      }

      const cartData = userData[0].cart || [];

      const existingProductIndex = cartData.findIndex(
        (product) => product.product_id === detaildata.id
      );

      if (existingProductIndex !== -1) {
        cartData[existingProductIndex].quantity += 1;
      } else {
        const newProduct = {
          product_id: detaildata.id,
          name:detaildata.name,
          image:detaildata.image,
          price:detaildata.price,
          category:detaildata.category,
          quantity: 1,
        };
        cartData.push(newProduct);
      }
      await axios.patch(`http://localhost:5000/users/${user_id}`, {
        cart: cartData,
      });

      console.log("Cart updated successfully");
    } catch (error) {
      console.error("Error updating the cart:", error);
    }
  };

  // console.log(data);

  useEffect(() => {
    getDetail(id);
    // handleCart();
  }, []);
  // console.log(detaildata);
  return (
    <>
      <div class="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <>
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div>
                <div class=" rounded-lg  mb-4">
                  <div class=" rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <img
                      className=" object-contain"
                      src={detaildata.image}
                      alt="imagee"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {detaildata.name}
              </h2>
              <p class="text-gray-500 text-sm">
                By{" "}
                <a href="#" class="text-indigo-600 hover:underline">
                  ABC Company
                </a>
              </p>

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span class="text-indigo-400 mr-1 mt-1">$</span>
                    <span class="font-bold text-indigo-600 text-3xl">
                      {detaildata.price}
                    </span>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                  <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>

              <p class="text-blck">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              <div class="flex py-4 space-x-4">
                <Button
                  onClick={updateCart}
                  variant="gradiant"
                  size="md"
                  color="pink"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Details;
