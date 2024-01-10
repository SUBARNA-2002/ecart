import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [detaildata, setDetaildata] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getDetail = async (id) => {
    try {
      const respond = await axios.get(`http://localhost:5000/product/${id}`);
      // console.log(res.data);
      setDetaildata(respond.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log(detaildata);
  


  useEffect(() => {
    getData();
    getDetail();
  }, []);

  return (
    <ProductContext.Provider value={{ getDetail, data, detaildata, }}>
      {children}
    </ProductContext.Provider>
  );
};
