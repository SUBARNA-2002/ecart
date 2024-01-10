// Cart.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";
// import CheckoutModal from "../../components/CheckoutModal";
// import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
function Cart() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const [cartdata, setCartdata] = useState([]);
  const [pid, setPid] = useState([]);
  const { detaildata } = useContext(ProductContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCartData = async () => {
    try {
      // Assuming 'user_id' is stored in sessionStorage
      const user_id = sessionStorage.getItem("user_id");
      const res = await axios.get(`http://localhost:5000/users?id=${user_id}`);
      setPid(res.data);
      setCartdata(res.data?.cart || []);
    } catch (error) {
      console.log(error);
    }
  };

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
          name: detaildata.name,
          image: detaildata.image,
          price: detaildata.price,
          category: detaildata.category,
          quantity: 1,
        };
        cartData.push(newProduct);
      }
      await axios.patch(`http://localhost:5000/users/${user_id}`, {
        cart: cartData,
      });

      console.log("Cart updated successfully");
      getCartData(); // Refresh cart data after updating
    } catch (error) {
      console.error("Error updating the cart:", error);
    }
  };

  const calculateSubtotal = (quantity, price) => {
    return quantity * price;
  };

  const calculateTotalSubtotal = () => {
    return cartdata.reduce((total, item) => {
      return total + calculateSubtotal(item.quantity, item.price);
    }, 0);
  };

  const deleteCartItem = async (productId) => {
    try {
      const user_id = sessionStorage.getItem("user_id");
      const res = await axios.get(`http://localhost:5000/users?id=${user_id}`);
      const userData = res.data;

      if (userData.length === 0) {
        console.error("User not found");
        return;
      }

      const cartData = userData[0].cart || [];

      const updatedCart = cartData.filter(
        (product) => product.product_id !== productId
      );

      await axios.patch(`http://localhost:5000/users/${user_id}`, {
        cart: updatedCart,
      });

      console.log("Item removed from cart successfully");
      getCartData(); // Refresh cart data after deletion
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmCheckout = () => {
    // Perform actions to clear the cart or submit the order
    console.log("Checkout confirmed!");
    // Call a function to clear the cart or submit the order
    // For example: clearCart();
    handleCloseModal(); // Close the modal after confirmation
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      <div>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {pid.map((user) => {
              return user.cart.map((item) => (
                <div
                  key={item.product_id}
                  className="justify-between mb-6 rounded-lg p-1 shadow-black  shadow-md border border-blue-gray-500 sm:flex sm:justify-start"
                >
                  <img
                    src={item.image}
                    alt="product-image"
                    className="h-[40%] w-[50%] sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          defaultValue={item.quantity}
                          min={1}
                        />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{item.price}</p>
                        <svg
                          onClick={() => deleteCartItem(item.product_id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ));
            })}
          </div>

          {/* Subtotal */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            {pid.map((user) => {
              let totalSubtotal = 0;

              return (
                <React.Fragment key={user.id}>
                  {user.cart.map((item) => {
                    const subtotal = calculateSubtotal(
                      item.quantity,
                      item.price
                    );
                    totalSubtotal += subtotal;

                    return (
                      <div
                        key={item.product_id}
                        className="mb-2 flex justify-between"
                      >
                        <p className="text-gray-700">
                          {item.name} x {item.quantity}
                        </p>
                        <p className="text-gray-700">${subtotal}</p>
                      </div>
                    );
                  })}
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className="">
                      <p className="mb-1 text-lg font-bold">
                        ${totalSubtotal} USD
                      </p>
                      <p className="text-sm text-gray-700">including GSTT</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <button
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              onClick={handleOpen}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          <div>
            <Input type="text"></Input>
          </div>
        </DialogHeader>
        <DialogBody>
          <div>this is form page</div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Cart;
