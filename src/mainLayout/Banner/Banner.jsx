import React from "react";

const Banner = ({ clickData, completedCount }) => {
  return (
    <div className=" flex gap-5 px-5">
      <div className=" w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-15">
        <p className=" text-white text-center text-2xl">In-Progress</p>
        <p className="text-white font-bold text-5xl text-center">
          {clickData.length}
        </p>
      </div>
      <div className=" w-full bg-linear-to-r from-[#54CF68] to-[#00827A] py-15">
        <p className=" text-white text-center text-2xl">In-Progress</p>
        <p className="text-white font-bold text-5xl text-center">
          {completedCount.length}
        </p>
      </div>
    </div>
  );
};

export default Banner;
