import React from "react";

function Card() {
  return (
    <div className="px-20  py-10">
      <div className="font-bold text-3xl border-b-4 inline-block border-pink-600 ">
        Start Browsing
      </div>
      <div className="grid grid-cols-4 gap-5 py-3">
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer   rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fsignature_design_by_ashley%2fcolor%2fgrindleburg_d754%20dining%20room%20group%209-b1.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">Dinning Room</div>
        </div>
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer  rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/b/p/a1e18853-5f6b-4575-b42b-6c376b416583/assets/6ebe90025ada40719f69a901c3e1a2e0.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">Living Room</div>
        </div>
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer  rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://www.royalfurniture.com/current/img/category/office.jpg"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">Office</div>
        </div>
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer  rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fglobal_furniture%2fcolor%2favon-1_avonblk-qn-5pc-brwqkojfvnky6vjk-8jfybq.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">BedRoom</div>
        </div>
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer  rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://assets.roomstogo.com/product/summerset-way-brown-5-pc-rectangle-outdoor-dining-set_7506612P_image-3-2?cache-id=5be4e29cedb76a5fad8da373b385b6e2&h=385"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">Outdoor</div>
        </div>
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer  rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://d9dvmj2a7k2dc.cloudfront.net/catalog/product/cache/1/image/731x481/17f82f742ffe127f42dca9de82fb58b1/c/a/cap_176-3_tv_room_pah20201_1.jpg"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">
            Entertainment
          </div>
        </div>
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer  rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://www.homelane.com/blog/wp-content/uploads/2022/04/shutterstock_215654782.jpg"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">Kids Bedroom</div>
        </div>
        <div className="h-52 w-58 shadow-2xl hover:shadow-black cursor-pointer  rounded-xl">
          <img
            className="h-40 w-full object-cover rounded-t-xl"
            src="https://www.cyruscrafts.com/img/cms/blog/hang-wall-art-without-nails/best-way-to-hang-pictures-without-nails.jpg"
            alt=""
          />
          <div className="text-center font-bold py-2 text-lg">Wall Art</div>
        </div>
      </div>
      <hr className="py-3"/>
    </div>
  );
}

export default Card;
