"use client";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  blockUsers,
  deleteUsers,
  filterUsers,
  listUsers,
  unBlockUsers,
} from "@/src/redux-store/feature/user/userSlice";
import DashboardLayout from "@/src/app/dashboardLayout";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { userAttributes, users } from "@/src/constants";
import { Button, CustomModal, Delete } from "@/src/components";
import awsExports from "@/src/aws-exports";
import { Amplify } from "aws-amplify";
import { CountryDropdown } from "react-country-region-selector";

if (typeof window !== "undefined") {
  awsExports.oauth[
    "redirectSignIn"
  ] = `${window.location.origin}/external-auth`;
  awsExports.oauth["redirectSignOut"] = `${window.location.origin}/`;
}
Amplify.configure({ ...awsExports, ssr: true });

export default function App() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");

  const [isDelete, setisDelete] = useState(false);
  let selectedUsers: string[] = [];

  const { users, errorMsg, isLoading }: any = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(listUsers(null));
  }, [dispatch]);

  const filterCustomers = (filterBy: any) => {
    dispatch(filterUsers(filterBy));
    console.log(users);
  };

  const select = (e: any) => {
    if (e.target.checked) {
      selectedUsers.push(e.target.value);
    } else {
      selectedUsers = selectedUsers.filter((u) => {
        return u !== e.target.value;
      });
    }
    console.log(selectedUsers);
  };

  useEffect(() => {
    if (isDelete) {
      deleteUsersFn();
    }
    filterCustomers({ filterBy: "category", country: country });
  }, [isDelete, country]);

  const deleteUsersFn = (userId?: string) => {
    console.log("Users>>>>>: ", selectedUsers);
    if (selectedUsers.length > 0) {
      dispatch(deleteUsers(selectedUsers));
      return "deleted";
    } else if (userId) {
      dispatch(deleteUsers(userId));
      return "deleted";
    } else {
      console.log("Please select product(s) to delete");
      return "deleted";
    }
  };

  const blockUser = (userId?: string) => {
    console.log("Users>>>>>: ", selectedUsers);
    if (selectedUsers.length > 0) {
      dispatch(blockUsers(selectedUsers));
      return "deleted";
    } else if (userId) {
      dispatch(blockUsers(userId));
      return "deleted";
    } else {
      console.log("Please select user(s) to block");
      return "deleted";
    }
  };

  const unBlockUser = (userId?: string) => {
    console.log("Users>>>>>: ", selectedUsers);
    if (selectedUsers.length > 0) {
      dispatch(unBlockUsers(selectedUsers));
      return "deleted";
    } else if (userId) {
      dispatch(unBlockUsers(userId));
      return "deleted";
    } else {
      console.log("Please select user(s) to unblock");
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
                className="inline-flex items-center text-gray-700 hover:text-primary-600  "
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
          </ol>
        </nav>
        <div className="px-2 mt-5 pb-2d bg-white w-full  rounded-ss-lg rounded-se-lg shadow-sm  sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full">
            <div className="mb-2">
              <h1 className="text-md pt-5 font-semibold text-gray-900 sm:text-xl  py-2">
                All Users
              </h1>
            </div>
            <div className="items-center justify-between flex flex-col gap-2 sm:flex-row sm:flex-wrap md:divide-x md:divide-gray-100 pb-3">
              <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-fit">
                <form
                  className="sm:pr-3"
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                    filterCustomers({ filterBy: "search", search: search });
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
                        filterCustomers({ filterBy: "search", search: search });
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
                    className="z-10 hidden group-hover:block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 "
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-green-100  "
                          onClick={() => filterCustomers("all")}
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-green-100  "
                          onClick={() => filterCustomers("active")}
                        >
                          Active
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-green-100  "
                          onClick={() => filterCustomers("blocked")}
                        >
                          Blocked
                        </a>
                      </li>
                      {/* <li>
                        <a href="#" className="block px-4 py-2 hover:bg-green-100  ">On promotion</a>
                      </li> */}
                    </ul>
                  </div>
                </div>

                <div className="group">
                  <CountryDropdown
                    classes="border text-green-500 max-w-[152px] font-semibold border-green-300 hover:cursor-pointer rounded-lg text-sm px-3 py-1.5 flex gap-1 items-centersd "
                    value={country}
                    onChange={(val) => {
                      setCountry(val);
                    }}
                  />
                </div>

                <div className="group">
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
                    className="z-10 hidden mt-1 group-hover:block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[105px] "
                  >
                    <ul
                      className="py-2 text-sm text-red-500 "
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li className="block px-4 py-2 hover:bg-red-100  ">
                        <Button
                          title="Delete"
                          handleClick={(e) => {
                            // setisDelete(true);
                            deleteUsersFn();
                          }}
                        />
                      </li>

                      <li className="block px-4 py-2 hover:bg-red-100  ">
                        <Button
                          title="Block"
                          handleClick={(e) => {
                            blockUser();
                          }}
                        />
                      </li>

                      <li className="block px-4 py-2 hover:bg-green-100 text-green-500  ">
                        <Button
                          title="Unblock"
                          handleClick={(e) => {
                            unBlockUser();
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-2 overflow-x-scroll">
            <div className="overflow-x-autdfo rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="shadow sm:rounded-lg w-full">
                  {/* {!isLoading && isCompleted && products?.length == 0 && ( */}
                  {/* <div className="w-full h-[100px] flex justify-center items-center">
                      <p className="font-semibold m-auto">It's empty here</p>
                    </div> */}
                  {/* )} */}
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
                    <table className="min-w-full divide-y divide-gray-200  mb-3">
                      <thead className="bg-gray-100  sticky top-0">
                        <tr className="[&:nth-child(1)]:bg-blue-50d0">
                          <th className="pl-2">
                            {/* <input type="checkbox"  /> */}
                          </th>
                          {userAttributes.map((item: string, index: number) => (
                            <th
                              key={index}
                              scope="col"
                              className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap "
                            >
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="">
                        {users?.map((user: any, index: number) => {
                          return (
                            <tr
                              key={user.id}
                              className="even:bg-gray-50 text-black hover:cursor-pointer group"
                            >
                              <td className="px-2 ">
                                {
                                  <input
                                    type="checkbox"
                                    className="bg-black"
                                    value={user.id}
                                    onChange={select}
                                  />
                                }
                              </td>
                              <td
                                className={`flex p-4 flex-col justify-center sticky left-0 h-full py-2 ${
                                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                              >
                                {user.firstName}
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                                <span className="font-semibold text-left flex flex-col">
                                  <Link href={`/update-product/${user.id}`}>
                                    {user.lastName}
                                  </Link>
                                </span>
                              </td>
                              <td className="p-4 text-sm font-normal text-left text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {user.email}
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-900 text-left whitespace-nowrap  truncate">
                                {/* {categories?.map((cat: any)=>cat.id == .categoryID? cat.name:'' )} */}{" "}
                                {user.phone}
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {`${user.address.coutry}`}
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {user.address.region}
                              </td>
                              <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {user.address.city}
                              </td>

                              <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {user.address.zipcode}
                              </td>

                              <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {user.address.addressLine1}
                              </td>

                              <td className="flex justify-start items-center p-4 h-full">
                                {user.isActive ? (
                                  <div className="bg-green-100 rounded-md  text-green-800 h-full w-fit text-xs font-medium px-2 py-1">
                                    Active
                                  </div>
                                ) : (
                                  <div className="bg-red-100 text-red-800 h-full w-fit text-xs font-medium px-2 py-1 rounded-md">
                                    Blocked
                                  </div>
                                )}
                              </td>
                            </tr>
                            // </Link>
                          );
                        })}
                      </tbody>
                      <tfoot className="bg-gray-100  sticky top-0">
                        <tr>
                          <th className="w-4 pl-2"></th>
                          {userAttributes.map((item: string, index: number) => (
                            <th
                              key={index}
                              scope="col"
                              className="px-4 py-2 text-left text-xs tracking-wider text-gray-900 font-bold uppercase "
                            >
                              {item}
                            </th>
                          ))}
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

        <div className="sticky bottom-0 right-0 items-center w-full px-4 py-2 bg-white border-t border-gray-200 sm:flex sm:justify-between ">
          <div className="flex items-center mb-4 sm:mb-0">
            <a
              href="#"
              className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100  "
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
              className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100  "
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
            <span className="text-sm font-normal text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-900 ">
                1-{users?.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 ">
                {users?.length}
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
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
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
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
