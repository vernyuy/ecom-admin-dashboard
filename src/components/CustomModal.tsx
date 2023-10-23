"use client "
import React, { useState } from "react";
export interface customModalProps {
  isSuccess: boolean
}
const CustomModal = ({isSuccess}:customModalProps) => {
  const [isHidden, setIsHidden] = useState(false)
  return (
     <div className={isHidden?'hidden':"container m-auto z-[105] overflow-hidden"}>
     {isSuccess?<div className="flex justify-center">
      <div className="absolute inset-x-0 top-[18%] flex justify-center overflow-y-auto px-4">
        <div className="animate__animated animate__zoomInDown ease-in-out transition-all duration-700 p-2 pb-3 mb-5 mx-1 z-[105] h-fit w-[500px] bg-white dark:bg-[#161c23] rounded-md shadow-xl">
          <div className="flex items-center justify-between mb-2.5 px-3 mt-1">
            <div></div>
            <button
              onClick={()=>setIsHidden(true)}
              type="button"
              className="text-gray-400 -mr-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex dark:hover:bg-gray-600 dark:hover:text-white items-end"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center -mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-red-500 h-[70px]"
              viewBox="0 0 24 24"
            >
              <path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm1-3h-2v-2h2v2z" />
            </svg>
          </div>
          <div className="text-center">Are you sure you want to delete!!</div>

          <div className="flex">
            <div className="py-[20px] px-3 md:px-5 w-full ">
              <div className="font-light dark:text-[#d3dbe2] w-full flex justify-end gap-2">
                <button className="text-[15px] p-2 text-center bg-red-500 "
              >
                Delete
              </button>
              <button className="text-[15px] p-2 text-center bg-green-500">
                Cancel
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute overflow-hidden inset-0 flex justify-center bg-black bg-opacity-50 overflow-y-auto z-[100] "></div>
    </div>: <div className="flex justify-center">
      <div className="absolute inset-x-0 top-[18%] flex justify-center overflow-y-auto px-4">
        <div className="animate__animated animate__zoomInDown ease-in-out transition-all duration-700 p-2 pb-3 mb-5 mx-1 z-[105] h-fit w-[500px] bg-white dark:bg-[#161c23] rounded-md shadow-xl">
          <div className="flex items-center justify-between mb-2.5 px-3 mt-1">
            <div></div>
            <button
              onClick={()=>setIsHidden(true)}
              type="button"
              className="text-gray-400 -mr-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex dark:hover:bg-gray-600 dark:hover:text-white items-end"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center -mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-green-500 h-[70px]"
              viewBox="0 0 24 24"
            >
              <path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm1-3h-2v-2h2v2z" />
            </svg>
          </div>
          <div className="text-center">Successfully deleted!!</div>

          <div className="flex">
            <div className="py-[20px] px-3 md:px-5 w-full ">
              <div className="font-light dark:text-[#d3dbe2] w-full flex justify-end gap-2">
              <button className="text-[15px] p-2 text-center bg-green-500">
                Close
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute overflow-hidden inset-0 flex justify-center bg-black bg-opacity-50 overflow-y-auto z-[100] "></div>
    </div>}
  </div>
  );
};

export default CustomModal;
