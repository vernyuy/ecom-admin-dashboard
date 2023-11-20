"use client";

import React from "react";
import Link from "next/link";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const url = usePathname();
  console.log("pathname", url);
  const { users, errorMsg, isLoading, isSuccess }: any = useSelector(
    (state: RootState) => state.user,
  );
  const [toggle, setToggle] = useState({
    products: false,
    categories: false,
    orders: false,
    adverts: false,
    payments: false,
    delete: false,
  });

  useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]);
  return (
    <aside className="fixed h-screen bg-white dark:bg-black dark:text-white overflow-y-auto hidden md:block top-0 left-0 z-20 pt-16 flex-col flex-shrink-0 w-64  font-normal duration-75 lg:flex transition-width">
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 border-r border-gray-200">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 bg-white dark:bg-black dark:text-white divide-y divide-gray-200">
            <ul className="pb-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-base text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 group dark:hover:bg-white/10"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 dark:group-hover:text-white  transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3" sidebar-toggle-item="">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="group">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggle({
                      ...toggle,
                      products: !toggle.products,
                      categories: false,
                      orders: false,
                      adverts: false,
                      payments: false,
                    });
                  }}
                  className="flex items-center w-full p-2 text-base dark:text-white text-gray-900  transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-white/10"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 dark:group-hover:text-white  transition duration-75 dark:hover:text-white/10 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item=""
                  >
                    Products
                  </span>
                  <svg
                    className={
                      toggle.products || url.includes("product")
                        ? "w-6 h-6 rotate-0"
                        : "w-6 h-6 -rotate-90 group-hover:rotate-0"
                    }
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  id="dropdown-pages"
                  className={
                    toggle.products || url.includes("product")
                      ? "py-2 space-y-2 block"
                      : "py-2 space-y-2 hidden"
                  }
                >
                  <li>
                    <Link
                      href="/add-product"
                      className="flex items-center p-2 text-base dark:text-white text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      Add new
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="flex items-center p-2 dark:text-white text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      All products
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggle({
                      ...toggle,
                      products: false,
                      categories: !toggle.categories,
                      orders: false,
                      adverts: false,
                      payments: false,
                    });
                  }}
                  className="flex items-center w-full p-2 dark:text-white text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-white/10"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white "
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4z"
                      fill="currentColor"
                    />
                  </svg>

                  <span
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item=""
                  >
                    Categories
                  </span>
                  <svg
                    className={
                      toggle.categories || url.includes("categor")
                        ? "w-6 h-6 rotate-0"
                        : "w-6 h-6 -rotate-90 group-hover:rotate-0"
                    }
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  id="dropdown-pages"
                  className={
                    toggle.categories || url.includes("categor")
                      ? "py-2 space-y-2 block"
                      : "py-2 space-y-2 hidden"
                  }
                >
                  <li>
                    <Link
                      href="/add-category"
                      className="flex items-center p-2 text-base dark:text-white text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      Add Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="flex items-center p-2 text-base dark:text-white text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      All categories
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggle({
                      ...toggle,
                      products: false,
                      categories: false,
                      orders: false,
                      adverts: !toggle.adverts,
                      payments: false,
                    });
                  }}
                  className="flex items-center w-full p-2 text-base dark:text-white text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-white/10"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <svg
                    className={`flex-shrink-0 w-6 h-6  transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white/90 ${
                      toggle.adverts ? "text-white/90" : "text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item=""
                  >
                    Adverts
                  </span>
                  <svg
                    className={
                      toggle.adverts || url.includes("advert")
                        ? "w-6 h-6 rotate-0"
                        : "w-6 h-6 -rotate-90 group-hover:rotate-0"
                    }
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  id="dropdown-pages"
                  className={
                    toggle.adverts || url.includes("advert")
                      ? "py-2 space-y-2 block"
                      : "py-2 space-y-2 hidden"
                  }
                >
                  <li>
                    <Link
                      href="/add-carousel"
                      className="flex items-center p-2 text-base text-gray-900 dark:text-white/80 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      Add new
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advert"
                      className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      All Adverts
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/users"
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-white dark:hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#6b7280"
                      d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5zM6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9l-.6-.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4zm0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5zm5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2zM6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3z"
                    />
                  </svg>
                  <span className="ml-3" sidebar-toggle-item="">
                    Users
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:hover:bg-white/10 dark:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:group-hover:text-white group-hover:text-gray-900"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M28 13h-2v-2c0-2.8-2.2-5-5-5h-3V4h3c3.9 0 7 3.1 7 7v2zm-6 7h3v2h-3zm0 4h3v2h-3z"
                    />
                    <path
                      fill="currentColor"
                      d="M27 30h-5v-2h5V18h-7v9c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h2v3c0 .6.4 1 1 1s1-.4 1-1V16h11v12c0 1.1-.9 2-2 2zm-15-2h-1c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h1v2zm-1-18v2h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2.4l1.7 3l1.7-1l-2.3-4H4V4h10v6h-3z"
                    />
                  </svg>
                  <span className="ml-3" sidebar-toggle-item="">
                    Orders
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/payment"
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:hover:bg-white/10 dark:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:group-hover:text-white  group-hover:text-gray-900"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 20q-.825 0-1.413-.588T1 18V7h2v11h17v2H3Zm4-4q-.825 0-1.413-.588T5 14V6q0-.825.588-1.413T7 4h14q.825 0 1.413.588T23 6v8q0 .825-.588 1.413T21 16H7Zm2-2q0-.825-.588-1.413T7 12v2h2Zm10 0h2v-2q-.825 0-1.413.588T19 14Zm-5-1q1.25 0 2.125-.875T17 10q0-1.25-.875-2.125T14 7q-1.25 0-2.125.875T11 10q0 1.25.875 2.125T14 13ZM7 8q.825 0 1.413-.588T9 6H7v2Zm14 0V6h-2q0 .825.588 1.413T21 8Z"
                    />
                  </svg>
                  <span className="ml-3" sidebar-toggle-item="">
                    Payment
                  </span>
                </Link>
              </li>

              {/* <li className="group">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggle({
                      ...toggle,
                      products: false,
                      categories: false,
                      orders: false,
                      delete: !toggle.delete,
                      payments: false,
                      adverts: false,
                    });
                  }}
                  className="flex items-center w-full p-2 text-base dark:text-white text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-white/10"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:group-hover:text-white  group-hover:text-gray-900"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.5 1h9v3H22v2h-2.029l-.5 17H4.529l-.5-17H2V4h5.5V1Zm2 3h5V3h-5v1ZM6.03 6l.441 15h11.058l.441-15H6.03Zm3.142 3.257L12 12.086l2.828-2.829l1.415 1.415l-2.829 2.828l2.829 2.828l-1.415 1.415L12 14.914l-2.828 2.829l-1.415-1.415l2.829-2.828l-2.829-2.828l1.415-1.415Z"
                    />
                  </svg>
                  <span
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item=""
                  >
                    Deleted Items
                  </span>
                  <svg
                    className={
                      toggle.delete || url.includes("delete")
                        ? "w-6 h-6 rotate-0"
                        : "w-6 h-6 -rotate-90 group-hover:rotate-0"
                    }
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  id="dropdown-pages"
                  className={
                    toggle.delete || url.includes("advert")
                      ? "py-2 space-y-2 block"
                      : "py-2 space-y-2 hidden"
                  }
                >
                  <li>
                    <Link
                      href="/delete/products"
                      className="flex items-center p-2 text-base text-gray-900 dark:text-white/80 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/delete/categories"
                      className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/delete/orders"
                      className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/delete/payments"
                      className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      Payments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/delete/users"
                      className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      Users
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/delete/adverts"
                      className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      Adverts
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
