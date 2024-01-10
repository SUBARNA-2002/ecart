import { Button } from "@material-tailwind/react";
import React from "react";

function Banner() {
  return (
    <div className="h-[89vh] w-full  px-[80px] flex">
      <div className="w-[50%] h-[89vh] ">
        <div className="lg:absolute lg:top-[40%] lg:w-[42rem]  ">
          <div className="font-bold text-6xl">
            Modern Funiture For Your House
          </div>
          <div className="text-lg py-4">
            We understand your need for home decor with unique decorative
            accesssories
          </div>
          <Button variant="gradient" color="pink" size="md">
            <span className="text-lg">Shop More</span>
          </Button>
        </div>
       
      </div>
      <div className="w-[50%] h-[89vh]  flex gap-4 ">
        <div className="w-[50%] h-[69vh] bg-green-700 ">
          <img
            className="object-cover h-[69vh]"
            src="https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2_M?wid=690&qlt=65"
            alt="banner"
          />
          <div className=" text-base px-2 mt-8 font-bold  border-l-4 border-pink-400 ">
            Perform multiple functions in dynamic environments indoors and
            outdoors. Especially designs for sea places.
          </div>
         
        </div>
        <div className="w-[50%] h-[89vh] bg-green-700 ">
          <img
            className="object-cover h-[89vh]"
            src="https://assets.vogue.com/photos/60d36d4cffa68f7cbda1b8d2/1:1/w_3700,h_3700,c_limit/1011-AD-INEZ-02%20(1).jpg"
            alt="imagee"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
