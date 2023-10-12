"use client";

import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "@/src/types/types";
import { createProduct } from "@/src/redux-store/feature/products/productSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DashboardLayout from "../dashboardLayout";
import { useState } from "react";
import awsExports from "@/src/aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });
const schema = yup
  .object({
    name: yup.string().required("Required!"),
    description: yup.string().required("Required!"),
    productImageUrls: yup.string().required("Required!"),
    price: yup.number().positive().integer().required("Required!"),
    quantity: yup.number().positive().integer().required("Required!"),
    inStock: yup.boolean().required("Required!"),
    categoryID: yup.string().required("Required!"),
    sizes: yup.array(),
    colors: yup.string(),
    hasSizes: yup.boolean().required("Required!"),
    hasColors: yup.boolean().required("Required!"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { product, errorMsg, isLoading }: any = useSelector(
    (state: RootState) => state.product,
  );
  const [intitialValues, setIntitialValues] = useState({
    price: 1,
    name: "uhsd",
    description: "jeuidjuiwed",
    productImageUrls: ["hauidhdui"],
    quantity: 22,
    inStock: true,
    categoryID: "category-one",
    sizes: ["20", "30"],
    colors: ["red", "orange"],
    hasSizes: true,
    hasColors: true,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: productData) => {
    console.log(data);
    dispatch(createProduct(data));
  };

  return (
    <DashboardLayout>
      <div className="h-fit w-full px-8 bg-white py-5">
        <form
          className="w-full space-y-2.5"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(intitialValues);
          }}
        >
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              name="name"
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
              placeholder="Enter product name"
            />
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.name?.message}
            </p>
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Price
            </label>
            <input
              {...register("price")}
              value={intitialValues.price}
              type="number"
              name="price"
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
              placeholder="Enter product price"
            />
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.price?.message}
            </p>
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Quantity
            </label>
            <input
              {...register("quantity")}
              type="number"
              value={1}
              name="quantity"
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
              placeholder="Enter quantity"
            />
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.quantity?.message}
            </p>
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Colors
            </label>
            <input
              {...register("colors")}
              type="text"
              name="colors"
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
              placeholder="Enter color"
            />
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.colors?.message}
            </p>
          </div>

          <div className="py-2">
            <div className="flex">
              <button
                type="button"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l outline-none"
              >
                category ID
              </button>
              <select
                {...register("categoryID")}
                defaultValue="category-one"
                className="w-full font-normal py-2.5 px-3 hover:cursor-pointer bg-white text-gray-700 border rounded-r outline-none"
              >
                <option value="category-one">category one</option>
                <option value="category-two">category two</option>
              </select>
            </div>
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.categoryID?.message}
            </p>
          </div>

          <div className="py-2">
            <div className="flex">
              <button
                type="button"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l outline-none"
              >
                inStock
              </button>
              <select
                {...register("inStock")}
                className="w-full font-normal py-2.5 px-3 bg-white hover:cursor-pointer text-gray-700 border rounded-r outline-none"
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.inStock?.message}
            </p>
          </div>

          <div className="py-2">
            <div className="flex">
              <button
                type="button"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l outline-none"
              >
                hasSizes
              </button>
              <select
                {...register("hasSizes")}
                className="w-full font-normal py-2.5 px-3 hover:cursor-pointer bg-white text-gray-700 border rounded-r outline-none"
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.hasSizes?.message}
            </p>
          </div>

          <div className="py-2">
            <div className="flex">
              <button
                type="button"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l outline-none"
              >
                hasColors
              </button>
              <select
                {...register("hasColors")}
                className="w-full font-normal py-2.5 px-3 hover:cursor-pointer bg-white text-gray-700 border rounded-r outline-none"
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.hasColors?.message}
            </p>
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Image(s)
            </label>
            <input
              {...register("productImageUrls")}
              type="file"
              name="productImageUrls"
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
              placeholder="Select a course"
            />
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.productImageUrls?.message}
            </p>
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Description
            </label>
            <textarea
              {...register("description")}
              name="description"
              rows={4}
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none text-[15px]"
              placeholder="Enter product description"
            />
            <p className="text-red-500 text-sm font-light pt-[6px]">
              {errors.description?.message}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div></div>
            <button
              type="submit"
              disabled={isLoading}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {isLoading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                      opacity=".25"
                    />
                    <path
                      fill="currentColor"
                      d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
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
                )}
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
