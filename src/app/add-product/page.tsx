"use client";
import DashboardLayout from "../dashboardLayout";
import Link from "next/link";
export default function App() {
  return (
    <DashboardLayout>
      <nav className="flex mb-5 pt-3" aria-label="Breadcrumb">
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
                Add product
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="min-[1200px]:flex h-full w-full gap-5 max-[1200px]:space-y-5">
        <div className="w-full">
          <div className="w-full bg-white rounded p-4">
            <form className="w-full space-y-2.5">
              <div className="w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="course"
                >
                  Product name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
                  placeholder="Enter product name"
                />
                <p className="text-red-500 text-sm font-light pt-[6px]">kkk</p>
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="course"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
                  placeholder="Enter product price"
                />
                <p className="text-red-500 text-sm font-light pt-[6px]">kkkk</p>
              </div>

              <div className="w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="course"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  value={1}
                  name="quantity"
                  className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
                  placeholder="Enter quantity"
                />
                <p className="text-red-500 text-sm font-light pt-[6px]">hh</p>
              </div>

              <div className="w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="course"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  rows={6}
                  className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none text-[15px]"
                  placeholder="Enter product description"
                />
                <p className="text-red-500 text-sm font-light pt-[6px]">
                  jjjjjj
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full min-[1200px]:max-w-[350px] space-y-5">
          <div className="bg-white">
            <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
              <p className="font-bold text-blue-400">Product Categories</p>
            </div>
            <div className="min-h-[60px] p-2.5 pl-4">
              {/* <div className="font-semibold hover:cursor-pointer hover:text-blue-400 mt-2">
                Set product image
              </div> */}
              <div>
                <img
                  className="h-auto max-w-full"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <div className="mt-2 hover:cursor-pointer">
                  <p className="font-medium text-green-500">Edit image</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
              <p className="font-bold text-blue-400">Product image</p>
            </div>
            <div className="min-h-[60px] p-2.5 pl-4">
              {/* <div className="font-semibold hover:cursor-pointer hover:text-blue-400 mt-2">
                Set product image
              </div> */}
              <div>
                <img
                  className="h-auto max-w-full"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <div className="mt-2 hover:cursor-pointer">
                  <p className="font-medium text-green-500">Edit image</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
              <p className="font-bold text-blue-400">Product gallery image</p>
            </div>
            <div className="min-h-[80px] p-2.5">
              {/* <div className="font-semibold hover:cursor-pointer hover:text-blue-400">
                Set product image
              </div> */}
              <div className="grid grid-cols-4 gap-2">
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
                <img
                  className="h-auto"
                  src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                />
              </div>
              <div className="mt-2 hover:cursor-pointer">
                <p className="font-medium text-blue-500">Edit image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
