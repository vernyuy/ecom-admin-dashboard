"use client";

import Link from "next/link";
import React from "react";
import DashboardLayout from "../../dashboardLayout";
import { useParams, useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const { userid } = params;
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
                  Users
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
                  #{userid}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="px-2 mt-5 pb-2d bg-tranparent w-full    sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full sm:flex">
            <div className=" py- sm:flex w-full  ">
              <div className="w-full overflow-y-scrdfoll rounded-ss-lg rounded-se-lg shadow-sm p-4 pb-24 bg-white dark:bg-black sm:mx-3 mx-0">
                <h2 className="uppercase mb-3 mt- font-bold">User Details</h2>
                <div className="flex w-full justify-between sticky top-0 bg-white dark:bg-black flex-wrap border-b-[1px] border-gray-300 dark:border-white/10 pb-4">
                  <div>
                    <p className="text-gray-400 dark:text-gray-300">
                      User created
                    </p>
                    <span className="font-bold text-[15px]">
                      {/* {computeDate(payment?.createdAt)} */}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 flex-wrap">
                    {/* <div className="flex flex-col items-end">
                      <p>Status</p>
                      {payment?.status ? (
                        <span className="bg-green-100 border dark:bg-green-600/40 border-green-600 rounded-[4px] px-[4px] text-[14px]">
                          Completed
                        </span>
                      ) : (
                        <span className="bg-red-100 dark:bg-red-600/40 border border-red-600 dark:text-white rounded-[4px] px-[4px] text-[14px]">
                          Pending
                        </span>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default page;
