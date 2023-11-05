import React from 'react'
import DashboardLayout from '../../dashboardLayout';
import Link from 'next/link';

const page = () => {
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
                  Order
                </span>
              </div>
            </li>
          </ol>
              </nav>
              

              <div className="px-2 mt-5 pb-2d bg-white w-full  rounded-ss-lg rounded-se-lg shadow-sm  sm:px-4 mt-f3 md:mt-5d">
                <div className="w-full">
                      <div className='flex gap-4'>
                          <h3>Order ID: </h3>
                          <p>gdiuiug-3435ereg4-3noa9au4-3noo8u4e939-3t3g</p>
                      </div>

                      <div className='flex gap-4'>
                          <h3>Order Date: </h3>
                          <p>gdiuiug-3435ereg4-3noa9au4-3noo8u4e939-3t3g</p>
                      </div>

                      <div className='flex gap-4'>
                          <h3>Order status: </h3>
                          <p>gdiuiug-3435ereg4-3noa9au4-3noo8u4e939-3t3g</p>
                      </div>

                      <div className='flex gap-4'>
                          <h3>User Name: </h3>
                          <p>gdiuiug-3435ereg4-3noa9au4-3noo8u4e939-3t3g</p>
                      </div>

                      <div className='flex gap-4'>
                          <h3>User Contact: </h3>
                          <p>gdiuiug-3435ereg4-3noa9au4-3noo8u4e939-3t3g</p>
                      </div>

                      <div className='flex gap-4'>
                          <h3>User Address: </h3>
                          <p>gdiuiug-3435ereg4-3noa9au4-3noo8u4e939-3t3g</p>
                      </div>

                      <div className='flex gap-4'>
                          <h3>User Email: </h3>
                          <p>gdiuiug-3435ereg4-3noa9au4-3noo8u4e939-3t3g</p>
                      </div>

                      <div className='bg-gray-200'>
                          <h3>Ordered Items </h3>
                          <table className="min-w-full divide-y divide-gray-200  mb-3">
                      <thead className="bg-gray-100 sticky top-0">
                        <tr className="[&:nth-child(1)]:bg-blue-50d0">
                          <th className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap "
                              >#</th>
                                      <th className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap "
                              >Item ID</th>
                                      <th className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap "
                              >Name</th>
                                      <th className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap "
                              >QAUNTITY</th>
                                      <th className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap "
                              >unit price</th>
                                      <th className="px-4 p-2 text-left text-xs [&:nth-child(1)]:bg-blue-500 tracking-wider text-gray-900 font-bold uppercase whitespace-nowrap "
                              >Sub total</th>
                        </tr>
                      </thead>
                          </table>
                      </div>
                </div>
              </div>
          </main>
      </DashboardLayout>
  )
}

export default page