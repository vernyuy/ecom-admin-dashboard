"use client";
import React, { useState } from "react";
import DashboardLayout from "../../dashboardLayout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const [openDetails, setOpenDetails] = useState(false);
  var totalAmount = 0;
  const data = searchParams.get("order");
  const order = JSON.parse(data!);
  console.log(order);
  return (
    <DashboardLayout>
      <main>
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
                  Order Detail
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="px-2 mt-5 pb-2d bg-white dark:bg-black w-full  rounded-ss-lg rounded-se-lg shadow-sm  sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full">
            <div className="bg-gray-2dsf00">
              <h3>Ordered Items </h3>
              <table className="min-w-1/2 divide-y divide-gray-200  mb-3">
                <thead className="bg-gray-100 dark:bg-white/10  sticky top-0">
                  <tr className="">
                    <th className="px-4 p-2 text-left text-xs tracking-wider dark:text-white text-gray-900 font-bold uppercase whitespace-nowrap ">
                      Item ID
                    </th>
                    <th className="px-4 p-2 text-left text-xs  tracking-wider dark:text-white text-gray-900 font-bold uppercase whitespace-nowrap ">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4">Order Id</td>
                    <td className="px-4">{order.id}</td>
                  </tr>

                  <tr>
                    <td className="px-4">User Id</td>
                    <td className="px-4">
                      <Link href={`/user/ ${order.userId}`}>
                        {order.userID}
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4">Payment ID</td>
                    <td className="px-4">{order.orderPaymentId}</td>
                  </tr>

                  <tr>
                    <td className="px-4">User name</td>
                    <td className="px-4">{order.username}</td>
                  </tr>

                  <tr>
                    <td className="px-4">Order Status</td>
                    <td className="font-bold text-2xl px-4">
                      {order.orderStatus ? "PAID" : "PENDING"}
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4">Date</td>
                    <td className="px-4">{order.createdAt}</td>
                  </tr>

                  <tr>
                    <td className="px-4">Total amount</td>
                    <td className="font-bold text-2xl px-4">
                      {order.orderItems.map((item: any) => {
                        totalAmount = totalAmount + item.price * item.quantity;
                      })}
                      ${totalAmount}
                    </td>
                  </tr>

                  <tr
                    className="bg-gray-200 dark:text-white dark:bg-white/10 text- py-4 hover:cursor-pointer"
                    onClick={() => setOpenDetails(!openDetails)}
                  >
                    <td className="mt-0 px-4">Order Items</td>
                    <td className="">
                      {openDetails ? "minimize" : "view items"}
                    </td>
                  </tr>

                  <tr className={openDetails ? "block" : "hidden"}>
                    <td className="px-4"></td>
                    <td className="max-w-1/2">
                      {order.orderItems.map((item: any) => {
                        return (
                          <ol key={item.id}>
                            <li>
                              <span className="font-bold text-[18px] pr-5">
                                Item ID:
                              </span>{" "}
                              {item.id}
                              <ul className="pl-8">
                                <li>
                                  <span className="font-bold text-[18px] pr-5">
                                    Name:
                                  </span>{" "}
                                  {item.name}
                                </li>
                                <li>
                                  <span className="font-bold text-[18px] pr-5">
                                    Quantity:
                                  </span>
                                  {item.quantity}
                                </li>
                                <li>
                                  <span className="font-bold text-[18px] pr-5">
                                    Unit Price:
                                  </span>
                                  {item.price}
                                </li>
                                <li>
                                  <span className="font-bold text-[18px] pr-5">
                                    Sub Total:
                                  </span>
                                  ${item.price * item.quantity}
                                </li>
                              </ul>
                            </li>
                          </ol>
                        );
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
