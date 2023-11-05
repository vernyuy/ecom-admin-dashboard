"use client";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  reset,
  filterProduct,
  deleteProductsFn,
} from "@/src/redux-store/feature/products/productSlice";
import { deleteCategoriesFn, filterCategories, listCategories } from "@/src/redux-store/feature/category/categorySlice";
import DashboardLayout from "@/src/app/dashboardLayout";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { categoryAttributes } from "@/src/constants";
import { Button, CustomModal } from "@/src/components";

export default function Categories() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedItems, setSelecteditems]: any = useState([])

  const { products, isCompleted, errorMsg, isLoading }: any = useSelector(
    (state: RootState) => state.product,
  );
  const { categories }: any = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch<AppDispatch>();
  useLayoutEffect(() => {
    console.log("mounted");
    dispatch(listCategories());
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    if (success)
                    {
                      
                    setOpen(false)
                    }
  },[success])

  const filterCat = (filterBy: any) => {
    console.log("Hello")
    dispatch(filterCategories(filterBy));
    console.log(products);
  };

  const select = (e: any) => {
    if (e.target.checked)
    {
      setSelecteditems([...selectedItems, e.target.value]);
    } else
    {
      setSelecteditems(selectedItems.filter((p: string) => {
        return p !== e.target.value;
      }))
    }
    console.log(selectedItems);
  };

  const deleteCategory = () => {
    if (selectedItems.length > 0)
    {
      dispatch(deleteCategoriesFn(selectedItems));
      setSuccess(true)
      return "deleted";
    }
    else
    {
      console.log("Please select product(s) to delete");
      return "deleted";
    }
  };


  return (
    <DashboardLayout>
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
                  Categories
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="px-2 mt-5 pb-2d bg-white w-full  rounded-ss-lg rounded-se-lg shadow-sm dark:border-gray-700 sm:px-4 mt-f3 md:mt-5d">
          <div className="w-full">
            <div className="mb-2">
              <h1 className="text-md font-semibold text-gray-900 sm:text-xl dark:text-white py-2 pt-4">
                All categories
              </h1>
            </div>
            <div className="items-center justify-between flex flex-col gap-2 sm:flex-row sm:flex-wrap md:divide-x md:divide-gray-100 pb-3">
              <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-fit">
                <form
                  className="sm:pr-3"
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                    filterCat({ filterBy: "search", search: search });
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
                      placeholder="Search category by name"
                      onChange={(e) => {
                        setSearch(e.target.value);
                        filterCat({ filterBy: "search", search: search });
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="flex border-none flex-wrap gap-2">
                <div className="group">
                  <Link
                    href={"#"}
                    className=" border text-green-500 font-semibold border-green-300 focus:ring-0 group-hover:text-white group-hover:border-none group-hover:bg-green-300 rounded-lg text-sm px-4 py-1.5 flex gap-1 items-center"
                    type="button"
                  >
                    <Button title="Filter" btnType="button" />{" "}
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
                    className="z-10 hidden group-hover:block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-fit -ml-3 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => filterCat("all")}
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => filterCat("parent")}
                          className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Parent
                        </a>
                        <a
                          href="#"
                          onClick={() => filterCat("not-parent")}
                          className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Not parent
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="group">
                  <Link
                    href={"#"}
                    className=" border text-gray-900 font-semibold border-orange-300 focus:ring-0 group-hover:text-white group-hover:border-none group-hover:bg-orange-300 rounded-lg text-sm px-4 gap-1 py-1.5 flex items-center"
                    type="button"
                  >
                    <Button
                      title="Bulk actions"
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
                    className="z-10 hidden group-hover:block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-red-500 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(true)
                          }}
                        >delete selected</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href={"/add-category"}
                  className="text-gray-900 border border-green-300 focus:ring-0 hover:text-white hover:border-none hover:bg-gray-900 font-semibold rounded-lg text-sm px-4 py-1.5"
                  type="button"
                >
                  Add category
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-2 w-full overflow-x-scroll">
            <div className="overflow-x-autdfo w-full rounded-lg">
              <div className="inline-block min-w-full w-full align-middle">
                <div className="shadow sm:rounded-lg w-full">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 mb-3">
                    <thead className="bg-gray-100 dark:bg-blue-900 sticky top-0">
                      <tr>
                        <th className="pl-2"></th>
                        {categoryAttributes.map(
                          (item: string, index: number) => (
                            <th
                              key={index}
                              scope="col"
                              className="px-4 py-2 whitespace-nowrap text-left text-xs tracking-wider text-gray-900 font-bold uppercase dark:text-white"
                            >
                              {item}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>

                    {isLoading && (
                      <div className="w-full h-[100px] text-blue-500 flex justify-center">
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
                    )}

                    {!isLoading && isCompleted && categories?.length == 0 && (
                      <div className="w-full h-[100px] flex justify-center items-center">
                        <p className="font-semibold m-auto">It's empty here</p>
                      </div>
                    )}
                    <tbody className="">
                      {categories?.map((category: any, index: number) => {
                        return (
                          <tr key={category.id} className="even:bg-gray-50">
                            <th className="pl-3">
                              {
                                <input
                                  type="checkbox"
                                  className="bg-black"
                                  value={category.id}
                                  onChange={select}
                                />
                              }
                            </th>
                            <td className="w-20 p-4 flex flex-col justify-center">
                              {category.categoryImageUrl ? (
                                <img src={category.categoryImageUrl} />
                              ) : (
                                <div>Empty</div>
                              )}
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-900 text-center whitespace-nowrap dark:text-white">
                              <span className="font-semibold text-left flex flex-col">
                                <Link
                                  href={{
                                    pathname: `/update-category/${category.id}`,
                                    query: category,
                                  }}
                                >
                                  {category.name}
                                </Link>
                              </span>
                            </td>
                            <td className="p-4 text-sm font-normal text-left text-gray-500 overflow-y-auto dark:text-gray-400 h-fit w-fit">
                              <div className="overflow-y-auto  max-h-md">
                                {category.description}
                              </div>
                            </td>
                            <td className="p-4 flex justify-start">
                              {category.isParent ? (
                                <p className="bg-green-100 whitespace-normal m-auto text-green-800 h-fit w-fit text-xs font-medium px-2.5 py-2 rounded-md -ml-1">
                                  True
                                </p>
                              ) : (
                                <p className="bg-orange-100 whitespace-normal m-auto text-orange-800 h-fit w-fit text-xs font-medium px-2.5 py-2 rounded-md -ml-1">
                                  false
                                </p>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot className="bg-gray-100 dark:bg-blue-900 sticky top-0">
                      <tr>
                        <th className="w-4 pl-2"></th>
                        {categoryAttributes.map(
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 right-0 items-center w-full px-4 py-2 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
          <div className="flex w-full items-center mb-4 sm:mb-0">
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
                1-{categories?.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {categories?.length}
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
      <CustomModal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-64">
          <div className="flex justify-center -mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-orange-500 h-[60px]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm1-3h-2v-2h2v2z" />
                </svg>
            </div>
          {selectedItems.length === 0 ? <div>
            <p>Please select data to delete</p>
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={(e)=>setOpen(false)}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Ok
              </button>
            </div>
          </div> : <div>
              <p>Deleting this category will also delete products under this category.</p>
              <p>Are you sure you want to delete?</p>
              <div className="flex justify-end mt-6">
              <button
                type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    deleteCategory()
                }}
                className="text-white bg-red-500  hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {isLoading? "Deleting":"Delete"}
                </button>
                
                <button
                type="button"
                onClick={e=>setOpen(false)}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Cancel
              </button>
            </div> </div> }
            </div>
          </CustomModal>
                  
      <CustomModal open={success} onClose={() => setSuccess(false)}>
            <div className="text-center w-64">
           <div>
            <p>Delete Successful</p>
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={(e)=>setSuccess(false)}
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
