"use client "
import React, { MouseEventHandler, useState } from "react";
export interface customModalProps {
  isSuccess?: boolean,
  msg?: string,
  handleClick: MouseEventHandler<HTMLButtonElement>,
  errorMsg?: string,
  resetIsComplete: any
}
const CustomModal = ({ open, onClose, children }: any) => {
  return (<>
    <div
      onClick={onClose}
      className={`flex inset-0 justify-center items-center transition-colors absolute ${open?' visible z-50 bg-black/20':'invisible'}`}
    >
      <div
        onClick={e=>{e.stopPropagation()}}
      className={`bg-white rounded-xl shadow p-6 transition-all ${open?' scale-100 opacity-100':'scale-125 opacity-0'}`}>
        <div className="flex items-center justify-between mb-2.5 px-3 mt-1">
              <div></div>
        <button
                onClick={onClose}
                type="button"
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
              {children}
      </div>
    </div>
  </>);
}
export default CustomModal;
