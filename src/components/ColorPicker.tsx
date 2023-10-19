import React, { useState } from "react";
import { ChromePicker } from "react-color";
const ColorPicker = ({
  resetStates,
  currentColor,
  handleChange,
  colors,
  addColor,
  colErr,
}: any) => {
  return (
    <div className="overflow-hidden mx-auto z-[105]">
      <div className="flex justify-center">
        <div className="absolute inset-x-0 top-[18%] flex justify-center overflow-y-auto px-4">
          <div className="z-[105] h-fit w-[400px] bg-white rounded shadow">
            <div className="flex items-center justify-between mb-2.5 mt-1 px-3.5 pt-2">
              <div></div>
              <button
                type="button"
                onClick={() => resetStates("showPicker", false)}
                className="text-gray-400 -mr-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-end"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-3 pb-6 px-5">
              {colors.map((color: any) => (
                <div
                  title="click to remove color"
                  key={color}
                  className={`rounded h-6 w-6 hover:cursor-pointer`}
                  style={{ backgroundColor: color }}
                  onClick={() => addColor("colors", true, color)}
                ></div>
              ))}
            </div>

            {colErr && (
              <div className="text-red-500 -mt-2 px-5 pb-5 text-[14px]">
                {colErr}
              </div>
            )}

            <div className="flex justify-center items-center gap-5 pb-8">
              <ChromePicker
                color={currentColor}
                onChangeComplete={handleChange}
              />
              <button
                type="button"
                onClick={() => addColor("colors", false, "")}
                className="text-white min-w-fit whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl outline-none font-medium rounded-lg text-sm px-3 py-2 text-center mt-4"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="absolute overflow-hidden inset-0 bg-black bg-opacity-20 overflow-y-auto z-[100] "></div>
      </div>
    </div>
  );
};

export default ColorPicker;
