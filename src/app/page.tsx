"use client";
import DashboardLayout from "@/src/app/dashboardLayout";
import { Panel } from "../components/Panel";
import Link from "next/link";
import dashboardService from "../redux-store/feature/dashboard/dashboardService";
import { useEffect, useState } from "react";
import { BarChat } from "../components/Delete";
export default function Home() {
  const [panel, setpanel] = useState({
    success: false,
    totOrders: 0,
    totProducts: 0,
    totPayments: 0,
    totCustomers: 0,
    totAmount: 0,
    todayOrders: 0,
  });
  useEffect(() => {
    const paneldata = async () => {
      const result = await dashboardService.panelData();
      setpanel(result);
    };
    paneldata();
  }, []);

  return (
    <>
      <DashboardLayout>
        <main className="w-full h-full sticky top-0 overflow-y-hidden">
          <nav className="flex sticky top-0 my-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <svg
                  className="w-5 h-5 mr-2.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
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
                    Dashboard
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="sm:grid xl:grid-cols-4 min-[2000px]:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 flex-wrap p-5 gap-y-2 gap-x-4">
            <Panel
              bg={"#2081ba"}
              title={"Today's Orders"}
              figure={panel.todayOrders}
              url={"/orders"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto w-16 h-16 text-black/30"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                >
                  <path d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16l.803-10Z" />
                  <path d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5" />
                </g>
              </svg>
            </Panel>
            <Panel
              bg={"#07B61A"}
              title={"Total Revenue"}
              figure={`$${panel.totAmount}`}
              url={"/payments"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto w-16 h-16 text-black/30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"
                />
                <path
                  fill="currentColor"
                  d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599l-2.098.715ZM19.425 10H9.397l7.469-2.546l1.522-.487L19.425 10ZM15.55 5.79L7.84 8.418l6.106-4.878l1.604 2.25ZM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169Z"
                />
              </svg>
            </Panel>
            <Panel
              bg={"#fcba03"}
              title={"Total Products"}
              url={"/products"}
              figure={panel.totProducts}
            >
              <svg
                className="my-auto w-16 h-16 text-black/30"
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
            </Panel>
            <Panel
              bg={"#ba2027"}
              title={"Total Customers"}
              url={"/users"}
              figure={panel.totCustomers}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto w-16 h-16 text-black/30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5zM6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9l-.6-.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4zm0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5zm5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2zM6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3z"
                />
              </svg>
            </Panel>
          </div>

          {/* <div className="sm:flex sm:h-xl w-full">
            
            <div className="w-full h-full bg-slate-500">
              <BarChat/>
            </div>
            <div className="bg-red-500 w-full">dlsflhdfjh</div>
          </div> */}
        </main>
      </DashboardLayout>
    </>
  );
}
