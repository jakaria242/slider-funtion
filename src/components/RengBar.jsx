import React, { useState } from "react";
import range from "../assets/images/range.svg";

const RengBar = () => {
  const [rangee, setRangee] = useState({
    ran1: "",
    ran2: "",
  });
  const handleRange = (e) => {
    const { name, value } = e.target;
    setRangee({
      ...rangee,
      [name]: value,
    });
  };

  return (
    <section className="bg-[#221f1f] py-10">
      <div className="w-container mx-auto">
        <h2 className="text-5xl font-medium text-white uppercase text-center mb-[50px]">
          Rangbar
        </h2>
        <div className="flex justify-between items-center gap-3 ">
          <div className="w-[800px] p-[15px] border border-white">
            <div className="h-[25px] w-full bg-gradient mb-[15px]"></div>
            <div className=" relative ">
              <img src={range} alt="not fount" />
              <input
                onChange={handleRange}
                type="range"
                name="ran1"
                min="1800"
                max="5400"
                className="w-full h-full bg-transparent rounded-lg cursor-pointer appearance-none  absolute top-0 left-0 rangeInput"
                value={rangee.ran1}
              />
            </div>
            <div className="mt-[10px] flex items-center justify-between">
              <p className="text-[16px]  text-[#D4D4D4]">1800K</p>
              <p className="text-[16px]  text-[#D4D4D4]">2200K</p>
              <p className="text-[16px]  text-[#D4D4D4]">2600K</p>
              <p className="text-[16px]  text-[#D4D4D4]">3000K</p>
              <p className="text-[16px]  text-[#D4D4D4]">3400K</p>
              <p className="text-[16px]  text-[#D4D4D4]">3800K</p>
              <p className="text-[16px]  text-[#D4D4D4]">4200K</p>
              <p className="text-[16px]  text-[#D4D4D4]">4600K</p>
              <p className="text-[16px]  text-[#D4D4D4]">5000K</p>
              <p className="text-[16px]  text-[#D4D4D4]">5400K</p>
            </div>
          </div>
          <div className="w-[350px] p-[28px] border border-white">
            <input
              onChange={handleRange}
              type="range"
              name="ran2"
              min="70"
              max="90"
              className="w-full h-[6px] appearance-none bg-teal-700 rounded-lg cursor-pointer rann"
              value={rangee.ran2}
            />
            <div class="flex justify-between mt-3">
              <p class="text-[16px] text-[#D4D4D4]">70</p>
              <p class="text-[16px] text-[#D4D4D4]">75</p>
              <p class="text-[16px] text-[#D4D4D4]">80</p>
              <p class="text-[16px] text-[#D4D4D4]">85</p>
              <p class="text-[16px] text-[#D4D4D4]">90</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RengBar;
