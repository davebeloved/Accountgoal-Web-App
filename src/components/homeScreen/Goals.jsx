import React, { useState } from "react";
import { FaRegMap } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { LuListChecks } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import Layer_1 from "../image/Layer_1.svg";
import MapScreen from "../image/mapscreen.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const Goals = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);

    //console.log("Goals component is rendering");
  };

  return (
    <div className="flex">
      <div className="bg-blue-500 w-20 h-[982px] flex flex-col items-center gap-6 ">
        <img
          src={Layer_1}
          alt="Layer1 Image"
          className="w-[26.11px] h-[42px] absolute top-[21px] left-[27px]"
        />
        <br />
        <br />
        <br />
        <div className="flex flex-col items-center gap-1 text-white">
          <FaRegMap className="w-7 h-7" />
          <span>Map</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-white">
          <LuCalendarDays className="w-7 h-7" />
          <span>Calendar</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-white">
          <LuListChecks className="w-7 h-7" />
          <span>Todo list</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-white">
          <GoGoal className="w-7 h-7" />
          <span>Goals</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-white">
          <BiSupport className="w-7 h-7" />
          <span>Support</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-white">
          <HiOutlineLogout className="w-7 h-7" />
          <span>Logout</span>
        </div>
      </div>

      <div className="grid grid-cols-2">
      <div className="">
        <img
          src={MapScreen}
          alt="map screen image"
          className="w-10/12 h-5/6 object-cover"
        />
      </div>

      <div className="flex left-40 max-w-screen-lg w-screen text-left p-4 justify-start mr-0">
        <div className="justify-items-start p-4">
          <div className="flex justify-between w-full">
            {" "}
            {/* Adjusted to use flex and justify-between */}
            <div className="flex justify-start w-full">
              {" "}
              {/* Adjusted to use flex and justify-start */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl text-bold text-left">Goals</h1>
              </div>
            </div>
            <div>
              <div>
                <MdOutlineCancel className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-1 mt-14 md:mt-4">
            <label className="font-inter" htmlFor="email">
              Goal Name <span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="email"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
          </div>
          <div className="flex flex-col gap-y-1 mt-14 md:mt-4 relative">
            {" "}
            {/* Add relative positioning to the container */}
            <label className="font-inter" htmlFor="email">
              End Date<span className="text-[#ed0202]">*</span>
            </label>
            <div style={{ position: "relative" }}>
              <CiCalendarDate
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "10px",
                  zIndex: "1",
                }}
              />
              <input
                type="text"
                placeholder=""
                name="email"
                className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px] pl-[30px]"
              />{" "}
              {/* Adjust padding-left to accommodate the icon */}
            </div>
          </div>

          <div className="flex flex-col gap-y-1 mt-14 md:mt-4">
            <h1 className="text-3xl text-bold text-left justify-start mr-16">
              Sub Goals
            </h1>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="mr-2 w-5 h-5 border border-gray-300 rounded"
              />{" "}
              {/* Moved the checkbox before the input */}
              <input
                type="text"
                placeholder="list item"
                name="email"
                className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[400px] h-[54px]"
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create Goal
          </button>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Goals;
