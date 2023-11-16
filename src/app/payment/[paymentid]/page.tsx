"use client";
import React, { useState } from "react";
import DashboardLayout from "../../dashboardLayout";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import Image from "next/image";
import moment from "moment";

export default function Page() {
  const searchParams = useSearchParams();
  const params = useParams();
  const { paymentid } = params;
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  var totalAmount = 0;
  const data = searchParams.get("payment");
  const payment = JSON.parse(data!);
  const computeDate = (date: any) => {
    return moment(date).format("llll");
  };

  // const orderedItems = order.orderItems.slice(
  //   indexOfFirstRecord,
  //   indexOfLastRecord,
  // );
  // const npages = Math.ceil(order.orderItems.length / recordsPerPage);
  // const numbers = Array.from(Array(npages + 1).keys()).slice(1);
  // const prevPage = () => {
  //   if (currentPage >= indexOfFirstRecord) {
  //     setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
  //   } else {
  //   }
  // };

  // const nextPage = () => {
  //   if (currentPage !== indexOfLastRecord) {
  //     setCurrentPage(
  //       currentPage < numbers.length ? currentPage + 1 : numbers.length,
  //     );
  //   }
  // };

  const changePage = (n: any) => {
    setCurrentPage(n);
  };
  return (
    <DashboardLayout>
      <main className="h-screen">
        <nav className="flex sticky top-0 my-2" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-gray-700 hover:text-primary-600 "
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
                  className="ml-1 text-gray-400 md:ml-2 "
                  aria-current="page"
                >
                  Orders
                </span>
              </div>
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
                  className="ml-1 text-gray-400 md:ml-2 "
                  aria-current="page"
                >
                  #{paymentid}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="px-2 mt-5 pb-2d bg-tranparent w-full    sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full sm:flex">
            <div className=" py- sm:flex sm:w-8/12 w-full  ">
              <div className="w-full overflow-y-scrdfoll rounded-ss-lg rounded-se-lg shadow-sm p-4 pb-24 bg-white dark:bg-black sm:mx-3 mx-0">
                <h2 className="uppercase mb-3 mt- font-bold">Order Details</h2>
                <div className="flex w-full justify-between sticky top-0 bg-white dark:bg-black flex-wrap border-b-[1px] border-gray-300 dark:border-white/10 pb-4">
                  <div>
                    <p className="text-gray-400 dark:text-gray-300">
                      order placed
                    </p>
                    <span className="font-bold text-[15px]">
                      {computeDate(payment.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 flex-wrap sm:w-1/2 w-full">
                    <div className="flex flex-col items-end">
                      <p>Status</p>
                      {payment.status ? (
                        <span className="bg-green-100 border dark:bg-green-600/40 border-green-600 rounded-[4px] px-[4px] text-[14px]">
                          Completed
                        </span>
                      ) : (
                        <span className="bg-red-100 dark:bg-red-600/40 border border-red-600 dark:text-white rounded-[4px] px-[4px] text-[14px]">
                          Pending
                        </span>
                      )}
                    </div>
                    {/* <div className="flex flex-col items-end">
                      <p>Shipping</p>
                      <span className="bg-green-100 border border-green-600 dark:bg-green-600/40 rounded-[4px] px-[4px] text-[14px]">
                        Shipped
                      </span>
                    </div> */}
                    {/* <div className="flex flex-col items-end">
                      <p>Payment</p>
                      {order.orderPaymentId ? (
                        <span className="bg-green-100 border border-green-600 dark:bg-green-600/40 rounded-[4px] px-[4px] text-[14px]">
                          Payed
                        </span>
                      ) : (
                        <span className="bg-red-100 border border-red-600 dark:bg-red-600/40 rounded-[4px] px-[4px] text-[14px]">
                          Not Payed
                        </span>
                      )}
                    </div> */}
                  </div>
                </div>
                <div className="border-b-[1px] border-gray-300 dark:border-white/10 pb-1">
                  {/* {orderedItems.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="my-2 bg-gray-100 rounded-sm py-3 dark:bg-white/10 w-full"
                      >
                        <div className="w-full">
                          <div className="flex">
                            <div>
                              <Image
                                src={item?.productImage}
                                height={70}
                                width={80}
                                className="items-center mx-2"
                                alt="product's image"
                              />
                            </div>
                            <div className=" px-4 flex my-auto justify-between w-full">
                              <div className="">
                                <div className="">
                                  <span className="font-lg text-[18px] my-auto whitespace-nowrap text-blue-600">
                                    {item.name}
                                  </span>{" "}
                                </div>
                                <div>
                                  <span className="font-lg text-[14px] pr-5">
                                    Quantity:
                                  </span>
                                  {item.quantity}
                                </div>
                              </div>
                              <div className="w-full text-right">
                                <div className="flex text-right justify-between text-[14px]">
                                  <span className="font-lg text-[14px] w-3/4 text-right">
                                    Price:
                                  </span>
                                  ${item.price}
                                </div>
                                <div className="flex text-right justify-between text-[14px]">
                                  <span className="font-lg text-[14px] w-3/4 text-right">
                                    Tax:
                                  </span>
                                  {0}
                                </div>
                                <div className="text-right flex  justify-between text-[14px]">
                                  <span className="font-lg w-3/4 text-[14px] text-right ">
                                    Total:
                                  </span>
                                  <span className="font-bold">
                                    ${item.price * item.quantity}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })} */}

                  <div className="flex justify-between flex-wrap">
                    {/* <div className="flex gap-3 flex-wrap">
                      <a
                        href="#"
                        onClick={prevPage}
                        className="inline-flex justify-center p-1 text-gray-500 dark:text-white rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-white/10 "
                      >
                        <svg
                          className="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        onClick={nextPage}
                        className="inline-flex justify-center p-1 mr-2 text-gray-500 dark:text-white rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-white/10"
                      >
                        <svg
                          className="w-7 h-7"
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
                      </a>
                      <div className="flex gap-1">
                        {numbers.map((n, i) => (
                          <li
                            className={`flex list-none ${
                              currentPage == n ? "text-blue" : ""
                            }`}
                            key={i}
                          >
                            <a
                              href="#"
                              className={`p-1 h-6 mx-auto w-6 my-auto rounded-full flex ${
                                currentPage === n
                                  ? " dark:bg-white/10 bg-gray-200"
                                  : "dark:bg-white/0"
                              }`}
                              onClick={() => changePage(n)}
                            >
                              <p className="mx-auto my-auto text-[12px]">{n}</p>
                            </a>
                          </li>
                        ))}
                      </div>
                    </div> */}

                    {/* <div className="my-auto">
                      Showing {indexOfFirstRecord} -{" "}
                      {indexOfLastRecord < order.orderItems.length
                        ? indexOfLastRecord
                        : order.orderItems.length}{" "}
                      of {order.orderItems.length}
                    </div> */}
                  </div>
                </div>

                <div className="border-b-[1px] border-gray-300 dark:border-white/10 pb-4">
                  <div className="flex py-4 justify-between ">
                    <span>Subtotal</span>
                    {/* <span>
                      {order.orderItems.map((item: any) => {
                        totalAmount = totalAmount + item.price * item.quantity;
                      })}
                      ${totalAmount}
                    </span> */}
                  </div>

                  <div className="flex py-4 justify-between">
                    <span>Promotions</span>
                    <span>--</span>
                  </div>

                  <div className="flex py-4 justify-between">
                    <span>Shipping</span>
                    <span>--</span>
                  </div>

                  <div className="flex py-4 justify-between">
                    <span>Discount</span>
                    <span>--</span>
                  </div>
                </div>

                <div className="border-b-[1px] border-gray-300 dark:border-white/10 pb-4">
                  <div className="flex justify-between py-6 font-bold">
                    <span>TOTAL</span>
                    <span>${totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-4/12 w-ful sm:mx-3 mt-5 sm:mt-0">
              <div className=" w-full overflow-y-scrdfoll mb-4 rounded-ss-lg rounded-se-lg shadow-sm py-4 bg-white dark:bg-black ">
                <div>
                  <h1 className="font-bold text-[15px] px-4">
                    Customer Details
                  </h1>
                  <div className="mb-2 border-b-[1px] border-gray-300 px-4 dark:border-white/10">
                    <div className="flex gap-2 py-1 justify-start">
                      <span>Name:</span>
                      <Link href={`/users/${payment.userID}`}>
                        <span className=" whitespace-nowrap truncate text-[14px] dark:text-gray-500 font-bold">
                          {payment.username}
                        </span>
                      </Link>
                    </div>

                    <div className="flex gap-2 py-1 justify-start">
                      <span>Email:</span>
                      <span className=" whitespace-nowrap truncate text-[14px] dark:text-gray-500 font-bold">
                        {payment.email}
                      </span>
                    </div>

                    <div className="flex gap-2 py-1 justify-start">
                      <span>Tel:</span>
                      <span className=" whitespace-nowrap dark:text-gray-500 text-[14px] font-bold">
                        {payment.tel} +237 650 863 381
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full overflow-y-scrdfoll rounded-ss-lg rounded-se-lg shadow-sm py-4 bg-white dark:bg-black">
                {/* <div>
                  <h1 className="font-bold text-[15px] px-4">
                    Customer Details
                  </h1>
                  <div className="mb-2 border-b-[1px] border-gray-300 px-4 dark:border-white/10">
                    <div className="flex gap-2 py-1 justify-start">
                      <span>Name:</span>
                      <span className=" whitespace-nowrap truncate dark:text-gray-500 text-[14px] font-bold">
                        {order.username}
                      </span>
                    </div>

                    <div className="flex gap-2 py-1 justify-start">
                      <span>Email:</span>
                      <span className=" whitespace-nowrap dark:text-gray-500 truncate text-[14px] font-bold">
                        {order.email}
                      </span>
                    </div>

                    <div className="flex gap-2 py-1 justify-start">
                      <span>Tel:</span>
                      <span className=" whitespace-nowrap text-[14px] font-bold">
                        {order.tel}
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
