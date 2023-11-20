"use client";

import Link from "next/link";

import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUser,
  reset,
  signOut,
} from "@/src/redux-store/feature/user/authSlice";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import authService from "../redux-store/feature/user/authService";
import ThemeSwitcher from "./ThemeSwitcher";
import storeService from "../redux-store/feature/store/storeService";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [user, setUser] = useState([]);
  const { userData, errorMsg, isLoading, isSuccess, isErro }: any = useSelector(
    (state: RootState) => state.auth,
  );
  const [theme, settheme]: any[] = useState([]);
  const themeData = async () => {
    const response = await storeService.listTheme();
    settheme(response);
  };
  useEffect(() => {
    themeData();
    loggedUser();
    if (isShow) {
      router.replace("/login");
      dispatch(reset());
    }
  }, [isSuccess]);

  const loggedUser = async () => {
    dispatch(currentUser());
  };
  const logOut = () => {
    dispatch(signOut(null));
  };
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-black dark:text-white">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button className="p-2 text-gray-600 rounded cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100">
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="hidden w-6 h-6"
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
            <Link href="/" className="flex ml-2 md:mr-24">
              <img
                src={theme[0]?.logoUrl ? theme[0]?.logoUrl : ""}
                className="h-9 md:h-10 mr-3"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg dark:text-white lg:hidden hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Search</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 text-gray-500 rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">View notifications</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button>

            <button
              type="button"
              data-dropdown-toggle="apps-dropdown"
              className="hidden p-2 text-gray-500 dark:text-white rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">View notifications</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
            <ThemeSwitcher />

            <div className="flex items-center ml-3">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                id="user-menu-button-2"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-2"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={userData?.attributes?.picture}
                  alt="user photo"
                />
              </button>

              <button
                id="theme-toggle"
                data-tooltip-target="tooltip-toggle"
                type="button"
                onClick={() => setIsShow(!isShow)}
                className="text-gray-500 hover:text-red-200 dark:text-white focus:outline-none focus:ring-0 rounded-lg text-sm p-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22Zm7-6v-3h-8v-2h8V8l5 4l-5 4Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          isShow
            ? "block min-h-[200px] border right-0 bg-white dark:bg-black rounded-lg min-w-[200px] py-5 absolute"
            : "hidden"
        }
      >
        <div className="text-black flex justify-center gap-4 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            className="my-auto"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"
            />
          </svg>
          <Link className="my-auto" href={"/add-store-theme"}>
            Settings
          </Link>
        </div>

        <div className="flex">
          <button
            onClick={(e) => {
              e.preventDefault();
              logOut();
            }}
            className="m-auto border px-4 py-1 mt-4 rounded-md"
          >
            {isLoading ? "Logging out ..." : "logout"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
