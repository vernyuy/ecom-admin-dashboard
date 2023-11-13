"use client";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrders,
  filterOrders,
  listOrders,
} from "@/src/redux-store/feature/orders/orderSlice";
import DashboardLayout from "@/src/app/dashboardLayout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { S3BucketLink } from "@/src/constants";
import { Button, CustomModal } from "@/src/components";
import moment from "moment";
import { Storage } from "aws-amplify";
import Carousel from "@/src/components/Carousel";
import {
  createCarousel,
  listCarousel,
  updateCarousel,
} from "@/src/redux-store/feature/store/storeSlice";
import storeService from "@/src/redux-store/feature/store/storeService";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedItems, setSelecteditems]: any = useState([]);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  const [states, setStates] = useState({
    isLoading: false,
    backgroundImage: false,
    showPicker: false,
    colErr: "",
  });

  const res: any = useSelector((state: RootState) => state.advert);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(listCarousel());
  }, [dispatch, res.carousels?.lenth]);

  useEffect(() => {
    if (success) {
      setOpen(false);
    }
  }, [success]);

  const handleImage = (value: string) => {
    document.getElementById(value)?.click();
  };

  const setbackgroundImageUrl = async (event: any) => {
    setStates({ ...states, ["backgroundImage"]: true });
    try {
      let file = event.target.files[0];
      const key = await Storage.put(file.name.replace(" ", "_"), file, {
        level: "public",
        contentType: "image/png",
      });

      if (key) {
        setBackgroundImageUrl(S3BucketLink + key.key);
      }
    } catch (error) {
      console.log(error);
    }
    setStates({ ...states, ["backgroundImage"]: false });
  };

  const createBanner = () => {
    console.log("creating banner ....");
    dispatch(createCarousel({ status: true, bannerUrl: backgroundImageUrl }));
  };

  const disableCarousel = (advert: any) => {
    console.log("Disable carousel function");
    dispatch(updateCarousel(advert));
  };

  const deleteAdvert = (id: string) => {
    console.log("Deleting carousel");
    storeService.deleteAdvert(id);
  };
  return (
    <DashboardLayout>
      <main className="w-full h-fit sticky top-0 overflow-y-hidden">
        <nav className="flex sticky top-0 my-2" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-gray-700 dark:text-white hover:text-primary-600 "
              >
                <svg
                  className="w-5 h-5 mr-2.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span
                  className="ml-1 text-gray-400 md:ml-2 dark:text-white/80"
                  aria-current="page"
                >
                  Adverts
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="px-2 mt-5 pb-2d bg-white w-full dark:bg-black  rounded-ss-lg rounded-se-lg shadow-sm  sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full">
            <div className="mb-2">
              <h1 className="text-md pt-5 font-semibold dark:text-white text-gray-900 sm:text-xl  py-2">
                All Carousels
              </h1>
            </div>
            <div className="items-center justify-between flex flex-col gap-2 sm:flex-row sm:flex-wrap md:divide-x md:divide-gray-100 pb-3">
              <div className="flex border-none flex-wrap gap-2">
                <div className="group">
                  <Link
                    href={"/add-carousel"}
                    className=" border text-green-500 font-semibold border-green-300 focus:ring-0 group-hover:text-white group-hover:border-none group-hover:bg-green-300 rounded-lg text-sm px-4 py-1.5 flex gap-1 items-center"
                    type="button"
                  >
                    <Button title="Add Carousel" btnType="button" />{" "}
                  </Link>
                </div>

                <div className="group">
                  <Link
                    href={"/advert#banner"}
                    className=" border text-green-500 font-semibold border-green-300 focus:ring-0 group-hover:text-white group-hover:border-none group-hover:bg-green-300 rounded-lg text-sm px-4 py-1.5 flex gap-1 items-center"
                    type="button"
                  >
                    <Button title="Banners" btnType="button" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {res.isLoading ? (
            <div className="w-full h-[100px] text-blue-500 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="my-auto mx-auto"
              >
                <path
                  fill="currentColor"
                  d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </path>
              </svg>
            </div>
          ) : (
            <div className="w-full">
              {res?.carousels.map((carousel: any) =>
                carousel.bannerUrl !== null ? (
                  <></>
                ) : (
                  <div
                    className="sm:flex w-full justify-between flex-wrap"
                    key={carousel.id}
                  >
                    <div className="sm:w-9/12 w-full ">
                      <Carousel
                        key={carousel.id}
                        textColor={carousel.textColor}
                        title={carousel.title}
                        hasBg={carousel.hasBg}
                        image={carousel.backgroundImageUrl}
                        bgcolor={carousel.backgroundColor}
                      />
                    </div>
                    <div className="w-1/6 my-auto hidden sm:block">
                      <div className="flex justify-center -mt-4">
                        {!carousel.status ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-gray-500 h-[60px]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm1-3h-2v-2h2v2z" />
                          </svg>
                        ) : (
                          <svg
                            key={carousel.id}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-green-500 h-[60px]"
                          >
                            <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5l8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex mt-8 justify-evenly">
                        <button
                          className="py-1 px-2 text-black dark:text-white rounded-md border border-orange-500 hover:bg-orange-500 hover:text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            disableCarousel(carousel);
                          }}
                        >
                          {carousel.status ? "Disable" : "Enable"}
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteAdvert(carousel.id);
                          }}
                          className="py-1 px-2 rounded-md border bg-red-500 dark:border-none hover:border-red-500 hover:text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          )}
        </div>

        <div className="px-2 mt-5 pb-2d bg-white dark:bg-black w-full  rounded-ss-lg rounded-se-lg shadow-sm  sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full" id="banner">
            <div className="mb-2">
              <h1 className="text-md pt-5 font-semibold text-gray-900 dark:text-white sm:text-xl  py-2">
                All Banners
              </h1>
            </div>
            <div className="items-center justify-between flex flex-col gap-2 sm:flex-row sm:flex-wrap md:divide-x md:divide-gray-100 pb-3">
              <div className="flex border-none flex-wrap gap-2">
                <div className="group">
                  <Link
                    href={"#"}
                    onClick={() => setOpen(true)}
                    className=" border text-green-500 font-semibold border-green-300 focus:ring-0 group-hover:text-white group-hover:border-none group-hover:bg-green-300 rounded-lg text-sm px-4 py-1.5 flex gap-1 items-center"
                    type="button"
                  >
                    <Button title="Add Banner" btnType="button" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {res.isLoading ? (
            <div className="w-full h-[100px] text-blue-500 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="my-auto mx-auto"
              >
                <path
                  fill="currentColor"
                  d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </path>
              </svg>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {res.carousels?.map((carousel: any) =>
                carousel.bannerUrl === null ? (
                  <></>
                ) : (
                  <div className="h- p-1 bg-black">
                    <img
                      src={carousel.bannerUrl}
                      alt=""
                      className="h-full w-full"
                      key={carousel.id}
                    />
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      </main>
      <CustomModal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-64">
          <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
            <p className="font-bold text-blue-400">Carousel image</p>
          </div>
          <div className="min-h-[60px] p-2.5 pl-4">
            <input
              id="backgroundImageUrl"
              type="file"
              name="backgroundImageUrl"
              accept=".jpeg, .png, .jpg"
              onChange={setbackgroundImageUrl}
              hidden
            />

            {states.backgroundImage ? (
              <div className="flex justify-center text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <circle cx="4" cy="12" r="0" fill="currentColor">
                    <animate
                      fill="freeze"
                      attributeName="r"
                      begin="0;svgSpinners3DotsMove1.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="0;3"
                    />
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove7.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="4;12"
                    />
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove5.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="12;20"
                    />
                    <animate
                      id="svgSpinners3DotsMove0"
                      fill="freeze"
                      attributeName="r"
                      begin="svgSpinners3DotsMove3.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="3;0"
                    />
                    <animate
                      id="svgSpinners3DotsMove1"
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove0.end"
                      dur="0.001s"
                      values="20;4"
                    />
                  </circle>
                  <circle cx="4" cy="12" r="3" fill="currentColor">
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="0;svgSpinners3DotsMove1.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="4;12"
                    />
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove7.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="12;20"
                    />
                    <animate
                      id="svgSpinners3DotsMove2"
                      fill="freeze"
                      attributeName="r"
                      begin="svgSpinners3DotsMove5.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="3;0"
                    />
                    <animate
                      id="svgSpinners3DotsMove3"
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove2.end"
                      dur="0.001s"
                      values="20;4"
                    />
                    <animate
                      fill="freeze"
                      attributeName="r"
                      begin="svgSpinners3DotsMove3.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="0;3"
                    />
                  </circle>
                  <circle cx="12" cy="12" r="3" fill="currentColor">
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="0;svgSpinners3DotsMove1.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="12;20"
                    />
                    <animate
                      id="svgSpinners3DotsMove4"
                      fill="freeze"
                      attributeName="r"
                      begin="svgSpinners3DotsMove7.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="3;0"
                    />
                    <animate
                      id="svgSpinners3DotsMove5"
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove4.end"
                      dur="0.001s"
                      values="20;4"
                    />
                    <animate
                      fill="freeze"
                      attributeName="r"
                      begin="svgSpinners3DotsMove5.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="0;3"
                    />
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove3.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="4;12"
                    />
                  </circle>
                  <circle cx="20" cy="12" r="3" fill="currentColor">
                    <animate
                      id="svgSpinners3DotsMove6"
                      fill="freeze"
                      attributeName="r"
                      begin="0;svgSpinners3DotsMove1.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="3;0"
                    />
                    <animate
                      id="svgSpinners3DotsMove7"
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove6.end"
                      dur="0.001s"
                      values="20;4"
                    />
                    <animate
                      fill="freeze"
                      attributeName="r"
                      begin="svgSpinners3DotsMove7.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="0;3"
                    />
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove5.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="4;12"
                    />
                    <animate
                      fill="freeze"
                      attributeName="cx"
                      begin="svgSpinners3DotsMove3.end"
                      calcMode="spline"
                      dur="0.5s"
                      keySplines=".36,.6,.31,1"
                      values="12;20"
                    />
                  </circle>
                </svg>
              </div>
            ) : (
              <div>
                {backgroundImageUrl == "" ? (
                  <>
                    <div
                      onClick={() => handleImage("backgroundImageUrl")}
                      className="font-semibold text-[14px] pt-2 hover:cursor-pointer hover:text-blue-400"
                    >
                      Set carousel image
                    </div>
                  </>
                ) : (
                  <div className="">
                    <img className="h-36" src={backgroundImageUrl} />
                    <div
                      onClick={() => handleImage("backgroundImageUrl")}
                      className="mt-2 hover:cursor-pointer"
                    >
                      <p className="font-medium text-green-500">Edit image</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  createBanner();
                }}
                className="text-white bg-red-500  hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {res.isLoading ? "Saving" : "Save"}
              </button>

              <button
                type="button"
                onClick={(e) => setOpen(false)}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Cancel
              </button>
            </div>{" "}
          </div>
        </div>
      </CustomModal>

      <CustomModal open={success} onClose={() => setSuccess(false)}>
        <div className="text-center w-64">
          <div>
            <p>Delete Successful</p>
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={(e) => setSuccess(false)}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </CustomModal>
    </DashboardLayout>
  );
}
