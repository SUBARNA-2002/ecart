import { Button } from "@material-tailwind/react";
import React from "react";

function Mid() {
  return (
    <>
      <div className=" py-5 h-[70vh] px-20">
        <div className="font-bold text-3xl border-b-4 inline-block border-pink-600 ">
          Limited Offer
        </div>
        <div className="flex gap-6 py-2">
          <div>
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-livingroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <div className="text-lg font-bold inline-block mt-2">
              Living room furniture
            </div>
            <div className="font-medium">Upto 50% Off</div>
            <div className="py-2">
              <Button size="sm" color="pink" variant="gradient" >Shop Now</Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-bedroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <div className="text-lg font-bold inline-block mt-2">
              Bedroom furniture
            </div>
            <div className="font-medium">Upto 50% Off</div>
            <div className="py-2">
              <Button size="sm" color="pink" variant="gradient" >Shop Now</Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-diningroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <div className="text-lg font-bold inline-block mt-2">
              Dining room furniture
            </div>
            <div className="font-medium">Upto 50% Off</div>
            <div className="py-2">
              <Button size="sm" color="pink" variant="gradient" >Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-5 px-20">
        <div className="text-center font-semibold text-3xl">
         SHOP FURNITURE AT URBAN INTERIORS
        </div>
        <img
          className="img-fluid my-2 h-[50vh] w-full"
          src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstartedhero.png"
          alt="error"
        />
      </div>
      <hr />
    </>
  );
}

export default Mid;
