import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
// import { ProductContext } from "../../context/ProductContext";
const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div class="grid-container my-2">
        <div class="bx bx-1 mx-2 my-2">
          <img
            style={{ height: "100%", width: "100%" }}
            className="img-fluid"
            src="https://images.furnituredealer.net/img/dealer/711/upload/landing-page/dining%20room/c1842%20jeff%20724x390.jpg "
            alt="Dinning Rooom"
          />
          <h1 className="overlay text-4xl font-bold">DINING ROOM</h1>
        </div>

        <div class="bx bx-2 mx-2 my-2">
          <img
            style={{ height: "100%", width: "150%" }}
            className="img-fluid"
            src="https://cdn1.bigcommerce.com/server4700/df233/product_images/uploaded_images/a-193.jpg "
            alt="OutDoor Funiture"
          />

          <h1 className="overlay text-4xl font-bold">OUTDOOR</h1>
        </div>
        <div class="bx bx-3 mx-2 my-2">
          <img
            style={{ height: "100%", width: "150%" }}
            className="img-fluid"
            src="https://images.woodenstreet.de/image/data/tv-units/chappell-tv-unit-revised/walnut/updated/1.jpg "
            alt=""
          />

          <h1 className="overlay text-4xl font-bold">ENTERTAINMENT</h1>
        </div>
        <div class="bx bx-4 mx-2 my-2">
          <img
            style={{ height: "100%", width: "150%" }}
            className="img-fluid"
            src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2_M?wid=690&qlt=65"
            alt=""
          />

          <h1 className="overlay text-4xl font-bold">LIVING ROOM</h1>
        </div>
        <div class="bx bx-5 mx-2 my-2">
          <img
            style={{ height: "100%", width: "150%" }}
            className="img-fluid"
            src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fashley_furniture%2fcolor%2fhamlyn_h527-26-m.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20 "
            alt=""
          />

          <h1 className="overlay text-4xl font-bold">OFFICE</h1>
        </div>
        <div class="bx bx-6 mx-2 my-2">
          <img
            style={{ height: "100%", width: "150%" }}
            className="img-fluid"
            src="https://housetodecor.com/wp-content/uploads/2021/02/adorable-rainbow-kids-bunk-bed.jpg "
            alt=""
          />

          <h1 className="overlay text-4xl font-bold">KIDS BEDROOM</h1>
        </div>
        <div class="bx bx-7 mx-2 my-2">
          <img
            style={{ height: "100%", width: "150%" }}
            className="img-fluid"
            src="https://assets.ajio.com/medias/sys_master/root/20220618/bDX0/62acf0b5aeb26921af3968c2/-473Wx593H-464510063-multi-MODEL.jpg "
            alt=""
          />

          <h1 className="overlay text-4xl font-bold">WALL ARTS</h1>
        </div>
        <div class="bx bx-8 mx-2 my-2">
          <img
            style={{ height: "100%", width: "100%" }}
            className="img-fluid"
            src="https://3.imimg.com/data3/OT/JN/MY-14529023/single-bed-room-500x500.jpg"
            alt=""
          />
          <h1 className="overlay text-4xl font-bold">BEDROOM</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
