"use client";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "@/src/app/dashboardLayout";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { paymentAttributes } from "@/src/constants";
import { Button, CustomModal, Delete } from "@/src/components";
import { CountryDropdown } from "react-country-region-selector";
import {
  deletePayments,
  filterPayment,
  listPayments,
} from "@/src/redux-store/feature/payment/paymentSlice";

export default function Page() {
  const [search, setSearch] = useState("");
  const [del, setDel] = useState(false);

  const [isDelete, setisDelete] = useState(false);
  let selectedPayments: string[] = [];

  const { payments, errorMsg, isLoading }: any = useSelector(
    (state: RootState) => state.payment,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(listPayments(null));
  }, [dispatch]);

  const filterPay = (filterBy: any) => {
    dispatch(filterPayment(filterBy));
  };

  const select = (e: any) => {
    if (e.target.checked) {
      selectedPayments.push(e.target.value);
    } else {
      selectedPayments = selectedPayments.filter((o) => {
        return o !== e.target.value;
      });
    }
    console.log(selectedPayments);
  };

  useEffect(() => {
    if (isDelete) {
      deletePaymentsFn();
    }
    filterPay({ filterBy: "category" });
  }, [isDelete]);
  const deletePaymentsFn = (payId?: string) => {
    console.log("Users>>>>>: ", selectedPayments);
    if (selectedPayments.length > 0) {
      dispatch(deletePayments(selectedPayments));
      return "deleted";
    } else if (payId) {
      dispatch(deletePayments(payId));
      return "deleted";
    } else {
      console.log("Please select product(s) to delete");
      return "deleted";
    }
  };

  return (
    <DashboardLayout>
      {/* <Delete item="User" /> */}
      <main className="w-full h-full sticky top-0 overflow-y-hidden">
        <nav className="flex sticky top-0 my-2" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
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
                  className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                  aria-current="page"
                >
                  Users
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="px-2 mt-5 pb-2d bg-white w-full  rounded-ss-lg rounded-se-lg shadow-sm dark:border-gray-700 sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full">
            <div className="mb-2">
              <h1 className="text-md pt-5 font-semibold text-gray-900 sm:text-xl dark:text-white py-2">
                All Payments
              </h1>
            </div>
            <div className="items-center justify-between flex flex-col gap-2 sm:flex-row sm:flex-wrap md:divide-x md:divide-gray-100 pb-3">
              <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-fit">
                <form
                  className="sm:pr-3"
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                    filterPay({ filterBy: "search", search: search });
                  }}
                  method="GET"
                >
                  <label htmlFor="products-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full sm:w-64  xl:w-96">
                    <input
                      type="text"
                      name="text"
                      id="products-search"
                      value={search}
                      className="bg-gray-50 outline-none border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full py-1.5 px-2.5"
                      placeholder="Search users by name"
                      onChange={(e) => {
                        setSearch(e.target.value);
                        filterPay({ filterBy: "search", search: search });
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="flex border-none flex-wrap gap-2">
                <div className="group">
                  <Link
                    href={"/add-product"}
                    className=" border text-green-500 font-semibold border-green-300 focus:ring-0 group-hover:text-white group-hover:border-none group-hover:bg-green-300 rounded-lg text-sm px-4 py-1.5 flex gap-1 items-center"
                    type="button"
                  >
                    <Button title="Status" btnType="button" />{" "}
                    <svg
                      className="fill-current text-green-500 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </Link>

                  <div
                    id="dropdown"
                    className="z-10 hidden group-hover:block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => filterPay("all")}
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => filterPay("active")}
                        >
                          Payed
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => filterPay("blocked")}
                        >
                          Pending
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <div className="group">
                  <Link
                    href={"#"}
                    className=" border text-gray-900 font-semibold border-orange-300 focus:ring-0 group-hover:text-white group-hover:border-none group-hover:bg-orange-300 rounded-lg text-sm px-4 gap-1 py-1.5 flex items-center"
                    type="button"
                  >
                    <Button
                      title="Actions"
                      btnType="button"
                      containerStyles="text-orange-500 group-hover:text-white"
                      isDisable={true}
                    />{" "}
                    <svg
                      className="fill-current text-red-500 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </Link>

                  <div
                    id="dropdown"
                    className="z-10 hidden mt-1 group-hover:block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[105px] dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-red-500 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >

                      <li className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <Button
                          title="Delete"
                          handleClick={(e) => {
                            // setisDelete(true);
                            deletePaymentsFn()
                          }}
                        />
                      </li>

                      <li className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <Button
                          title="Ordered"
                          // handleClick={(e) => {
                          //   setisDelete(true);
                          // }}
                        />
                      </li>

                      <li className="block px-4 py-2 hover:bg-green-100 text-green-500 dark:hover:bg-gray-600 dark:hover:text-white">
                        <Button
                          title="Pending"
                          // handleClick={(e) => {
                          //   setisDelete(true);
                          // }}
                        />
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-2 overflow-x-scroll">
            <div className="overflow-x-autdfo rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="shadow sm:rounded-lg w-full">
                  {isLoading ? (
                    <div className="w-full h-[100px] text-blue-500 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="m-auto mx-auto"
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
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 mb-3">
                      <thead className="bg-gray-100 dark:bg-blue-900 sticky top-0">
                        <tr className="[&:nth-child(1)]:bg-blue-50d0">
                          <th className="pl-2">
                            {/* <input type="checkbox"  /> */}
                          </th>
                          {paymentAttributes.map(
                            (item: string, index: number) => (
                              <th
                                key={index}
                                scope="col"
                                className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap dark:text-white"
                              >
                                {item}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody className="">
                        {payments?.map((payment: any, index: number) => {
                          return (
                            <tr
                              key={payment.id}
                              className="even:bg-gray-50 text-black hover:cursor-pointer group"
                            >
                              <td className="px-2 ">
                                {
                                  <input
                                    type="checkbox"
                                    className="bg-black"
                                    value={payment.id}
                                    onChange={select}
                                  />
                                }
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                <span className="font-semibold text-left flex flex-col">
                                  {/* <Link href={`/update-product/${order.id}`}> */}
                                  {payment.id}
                                  {/* </Link> */}
                                </span>
                              </td>
                              <td className="p-4 text-sm font-normal text-left text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {payment.userID}
                              </td>

                              <td className="p-4 text-sm font-normal text-gray-900 text-left whitespace-nowrap dark:text-white truncate">
                                {/* {categories?.map((cat: any)=>cat.id == .categoryID? cat.name:'' )} */}{" "}
                                {payment.amount}
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-900 text-left whitespace-nowrap dark:text-white truncate">
                                {/* {categories?.map((cat: any)=>cat.id == .categoryID? cat.name:'' )} */}{" "}
                                {payment.createdAt.split("T")[0]}
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-900 text-left whitespace-nowrap dark:text-white truncate">
                                {/* {categories?.map((cat: any)=>cat.id == .categoryID? cat.name:'' )} */}{" "}
                                {payment.paymentIntentId}
                              </td>

                              <td className="flex justify-start items-center p-4 h-full">
                                {payment.paymentStatus ? (
                                  <div className="bg-green-100 rounded-md  text-green-800 h-full w-fit text-xs font-medium px-2 py-1">
                                    Payed
                                  </div>
                                ) : (
                                  <div className="bg-red-100 text-red-800 h-full w-fit text-xs font-medium px-2 py-1 rounded-md">
                                    Pending
                                  </div>
                                )}
                              </td>
                            </tr>
                            // </Link>
                          );
                        })}
                      </tbody>
                      <tfoot className="bg-gray-100 dark:bg-blue-900 sticky top-0">
                        <tr>
                          <th className="w-4 pl-2"></th>
                          {paymentAttributes.map(
                            (item: string, index: number) => (
                              <th
                                key={index}
                                scope="col"
                                className="px-4 py-2 text-left text-xs tracking-wider text-gray-900 font-bold uppercase dark:text-white"
                              >
                                {item}
                              </th>
                            ),
                          )}
                        </tr>
                      </tfoot>
                    </table>
                  )}
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 right-0 items-center w-full px-4 py-2 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center mb-4 sm:mb-0">
            <a
              href="#"
              className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
              className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-{payments?.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {payments?.length}
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="w-5 h-5 mr-1 -ml-1"
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
              Previous
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Next
              <svg
                className="w-5 h-5 ml-1 -mr-1"
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
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
