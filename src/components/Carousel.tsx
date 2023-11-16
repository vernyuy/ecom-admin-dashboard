"use client";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { updateCarousel } from "../redux-store/feature/store/storeSlice";
import storeService from "../redux-store/feature/store/storeService";

const Carousel = ({
  title,
  image,
  bgcolor,
  textColor,
  hasBg,
  id,
  carousel,
  cStatus,
}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const disableCarousel = (advert: any) => {
    console.log("Disable carousel function");
    dispatch(updateCarousel(advert));
  };

  const deleteAdvert = (id: string) => {
    console.log("Deleting carousel");
    storeService.deleteAdvert(id);
  };
  return (
    <>
      <div
        className="h-[300px] w-full mb-5 flex"
        style={{ backgroundColor: bgcolor }}
      >
        <div
          style={
            !hasBg
              ? {
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }
              : {
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }
          }
          className="w-full h-full overflow-y-hidden"
        >
          <div className="text-white  px-10 flex h-full w-3/4">
            <div className="my-auto">
              <p>Get 50% Off</p>
              <h2
                className="text-4xl text-white uppercase my-auto font-bold"
                style={{ color: textColor }}
              >
                {title}{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className={`flex justify-end`}>
          <div className="my-auto  hidden absolute group-hover:block">
            <div className="">
              <div className="flex justify-center">
                {cStatus ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-500 h-[60px]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm1-3h-2v-2h2v2z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-green-500 h-[60px]"
                  >
                    <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5l8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z" />
                  </svg>
                )}
              </div>
              <div className="flex mt-8 gap-2 justify-evenly">
                <button
                  className="py-1 px-2 text-black dark:text-white rounded-md border border-orange-500 hover:bg-orange-500 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    disableCarousel(carousel);
                  }}
                >
                  {!cStatus ? "Disable" : "Enable"}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteAdvert(id);
                  }}
                  className="py-1 px-2 rounded-md border bg-red-500 dark:border-none hover:border-red-500 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
