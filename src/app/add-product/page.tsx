"use client";
import DashboardLayout from "@/src/app/dashboardLayout";
import Link from "next/link";
import { useState } from "react";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "@/src/redux-store/feature/products/productSlice";
import awsExports from "@/src/aws-exports";
import { Amplify, Storage } from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });
export default function App() {
  const [errors, setErrors]: any = useState({});
  const [prodImg, setProdImg] = useState(false);
  const [prodImgUrls, setProdImgUrls] = useState(false);
  const [values, setValues] = useState({
    name: "",
    price: 1,
    description: "",
    productImage: "",
    productImageUrls: [],
    quantity: 1,
    inStock: true,
    categoryID: "category-two",
    sizes: [],
    colors: [],
    hasSizes: false,
    hasColors: false,
  });

  const dispatch = useDispatch<AppDispatch>();
  const { user, errorMsg, isLoading }: any = useSelector(
    (state: RootState) => state.product,
  );

  const handleSubmit = (event: any, formErrors: any) => {
    event.preventDefault();
    if (values.name == "") {
      formErrors.name = "Required!";
    }
    if (values.price == 0) {
      console.log("values : ", values);
      formErrors.price = "Price can not be zero";
    }
    if (values.quantity == 0) {
      formErrors.quantity = "Quantity can not be zero";
    }
    if (values.categoryID == "") {
      formErrors.categoryID = "Required!";
    }
    if (values.description == "") {
      formErrors.description = "Required!";
    }
    if (values.productImage == "") {
      formErrors.productImage = "Required!";
    }
    if (Object.keys(formErrors).length === 0) {
      dispatch(createProduct(values));
    } else {
      setErrors(formErrors);
    }
  };
  const onChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleFocus = (event: any, formErrors: any) => {
    const { value, name } = event;
    if (name == "name") {
      if (value == "") {
        formErrors.name = "Required!";
      } else if (!/^[A-Za-z0-9]{3,16}$/.test(value)) {
        errors.name =
          "product name should be 3-16 characters and shouldn't include any special character";
      }
    }
    if (name == "price") {
      if (value == "") {
        errors.price = "Required!";
      }
    }
    if (name == "quantity") {
      if (value == "") {
        formErrors.quantity = "Required!";
      }
    }
    if (name == "categoryID") {
      if (value == "") {
        formErrors.categoryID = "Required!";
      }
    }
    if (name == "description") {
      if (value == "") {
        formErrors.description = "Required!";
      }
    }
    return formErrors;
  };

  const selectProductImage = () => {
    document.getElementById("productImage")?.click();
  };

  const setProductImage = async (event: any) => {
    setProdImg(true);
    let file = event.target.files[0];
    const key = await Storage.put(file.name.replace(" ", "_"), file, {
      level: "public",
      contentType: "image/png",
    });

    if (key) {
      const newKey =
        "https://commerceb8039144d9044463a5cf2714cc51248d193514-staging.s3.us-east-2.amazonaws.com/public/" +
        key.key;
      setValues({ ...values, [event.target.name]: newKey });
      setProdImg(false);
    }
  };

  const selectProductGalleryImage = () => {
    document.getElementById("productImageUrls")?.click();
  };

  const setProductImages = async (event: any) => {
    try {
      setProdImgUrls(true);
      let file = event.target.files;
      let arrLinks: any = [];
      for (let i = 0; i < file.length; i++) {
        const key = await Storage.put(file[i].name.replace(" ", "_"), file[i], {
          level: "public",
          contentType: "image/png",
        });
        if (key) {
          const newKey =
            "https://commerceb8039144d9044463a5cf2714cc51248d193514-staging.s3.us-east-2.amazonaws.com/public/" +
            key.key;
          arrLinks = [...arrLinks, newKey];
        }
      }
      if (arrLinks.length != 0) {
        setValues({
          ...values,
          [event.target.name]: [...values.productImageUrls, ...arrLinks],
        });
      }
      setProdImgUrls(false);
    } catch (error) {
      setProdImgUrls(false);
    }
  };

  const removeImage = async (link: any) => {
    const del = await Storage.remove(link.split("public/")[1]);
    if (del) {
      const arr = values.productImageUrls;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === link) {
          arr.splice(i, 1);
        }
      }
      setValues({ ...values, ["productImageUrls"]: [...arr] });
    }
  };

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
      <form
        onSubmit={(e) => handleSubmit(e, {})}
        className="min-[1200px]:flex h-full w-full gap-5 max-[1200px]:space-y-5"
      >
        <div className="w-full">
          <div className="w-full space-y-2.5 bg-white rounded p-4">
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
                className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                  errors?.name && "border-red-500 text-red-500"
                }`}
                placeholder="Enter product name"
                value={values.name}
                onChange={onChange}
                onBlur={(e) => setErrors(handleFocus(e.target, {}))}
              />
              <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.name}
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
                type="number"
                name="price"
                className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                  errors?.price && "border-red-500 text-red-500"
                }`}
                placeholder="Enter product price"
                value={values.price}
                onChange={onChange}
                onBlur={(e) => setErrors(handleFocus(e.target, {}))}
              />
              <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.price}
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
                type="number"
                name="quantity"
                className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                  errors?.quantity && "border-red-500 text-red-500"
                }`}
                placeholder="Enter quantity"
                value={values.quantity}
                onChange={onChange}
                onBlur={(e) => setErrors(handleFocus(e.target, {}))}
              />
              <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.quantity}
              </p>
            </div>

            <div className="py-2">
              <div className="flex">
                <button
                  type="button"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l outline-none"
                >
                  Select category
                </button>
                <select
                  name="categoryID"
                  value={values.categoryID}
                  onChange={onChange}
                  onBlur={(e) => setErrors(handleFocus(e.target, {}))}
                  className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded-r outline-none ${
                    errors?.categoryID && "border-red-500 text-red-500"
                  }`}
                >
                  <option value="category-one">category one</option>
                  <option value="category-two">category two</option>
                </select>
              </div>
              <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.categoryID}
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="hasColors"
                type="checkbox"
                name="hasColors"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                onChange={onChange}
                checked={values.hasColors}
              />
              <label
                htmlFor="hasColors"
                className="ml-2 text-sm hover:cursor-pointer font-medium text-gray-400 dark:text-gray-500"
              >
                Has colors
              </label>
            </div>
            <div className="flex items-center pb-2">
              <input
                id="hasSizes"
                type="checkbox"
                name="hasSizes"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                checked={values.hasSizes}
                onChange={onChange}
              />
              <label
                htmlFor="hasSizes"
                className="ml-2 text-sm hover:cursor-pointer font-medium text-gray-400 dark:text-gray-500"
              >
                Has sizes
              </label>
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
                className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none text-[15px] ${
                  errors?.description && "border-red-500 text-red-500"
                }`}
                placeholder="Enter product description"
                value={values.description}
                onChange={onChange}
                onBlur={(e) => setErrors(handleFocus(e.target, {}))}
              />
              <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.description}
              </p>
            </div>
            <div className="w-full text-red-500">{errorMsg}</div>
            <div
              className={`flex justify-between items-center ${
                !errorMsg && "pt-4"
              }`}
            >
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
          </div>
        </div>
        <div className="w-full max-[1199px]:flex min-[1200px]:max-w-[350px] space-y-5 gap-5">
          <div
            className={`bg-white w-full ${
              errors.productImage && "border border-red-500"
            }`}
          >
            <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
              <p className="font-bold text-blue-400">Product image</p>
            </div>
            <div className="min-h-[60px] p-2.5 pl-4">
              <input
                id="productImage"
                type="file"
                name="productImage"
                hidden
                onChange={setProductImage}
              />

              {prodImg ? (
                <div className="flex justify-center text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4" cy="12" r="0" fill="currentColor">
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                      <animate
                        id="svgSpinners3DotsMove0"
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove1"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove0.end"
                        dur="0.001s"
                        values="20;4"
                      />
                    </circle>
                    <circle cx="4" cy="12" r="3" fill="currentColor">
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                      <animate
                        id="svgSpinners3DotsMove2"
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove3"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove2.end"
                        dur="0.001s"
                        values="20;4"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                    </circle>
                    <circle cx="12" cy="12" r="3" fill="currentColor">
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                      <animate
                        id="svgSpinners3DotsMove4"
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove5"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove4.end"
                        dur="0.001s"
                        values="20;4"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                    </circle>
                    <circle cx="20" cy="12" r="3" fill="currentColor">
                      <animate
                        id="svgSpinners3DotsMove6"
                        fill="freeze"
                        attributeName="r"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove7"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove6.end"
                        dur="0.001s"
                        values="20;4"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                    </circle>
                  </svg>
                </div>
              ) : (
                <div>
                  {values.productImage == "" ? (
                    <>
                      <div
                        onClick={selectProductImage}
                        className="font-semibold text-[14px] pt-2 hover:cursor-pointer hover:text-blue-400"
                      >
                        Set product image
                      </div>
                    </>
                  ) : (
                    <div className="">
                      <img className="h-auto" src={values.productImage} />
                      <div
                        onClick={selectProductImage}
                        className="mt-2 hover:cursor-pointer"
                      >
                        <p className="font-medium text-green-500">Edit image</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="text-red-500 pt-2">{errors?.productImage}</div>
            </div>
          </div>
          <div className="bg-white w-full">
            <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
              <p className="font-bold text-blue-400">Product gallery image</p>
            </div>
            <div className="min-h-[80px] p-2.5">
              <input
                id="productImageUrls"
                type="file"
                name="productImageUrls"
                hidden
                onChange={setProductImages}
                multiple
              />
              {prodImgUrls ? (
                <div className="flex justify-center text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4" cy="12" r="0" fill="currentColor">
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                      <animate
                        id="svgSpinners3DotsMove0"
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove1"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove0.end"
                        dur="0.001s"
                        values="20;4"
                      />
                    </circle>
                    <circle cx="4" cy="12" r="3" fill="currentColor">
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                      <animate
                        id="svgSpinners3DotsMove2"
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove3"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove2.end"
                        dur="0.001s"
                        values="20;4"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                    </circle>
                    <circle cx="12" cy="12" r="3" fill="currentColor">
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                      <animate
                        id="svgSpinners3DotsMove4"
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove5"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove4.end"
                        dur="0.001s"
                        values="20;4"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                    </circle>
                    <circle cx="20" cy="12" r="3" fill="currentColor">
                      <animate
                        id="svgSpinners3DotsMove6"
                        fill="freeze"
                        attributeName="r"
                        begin="0;svgSpinners3DotsMove1.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="3;0"
                      />
                      <animate
                        id="svgSpinners3DotsMove7"
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove6.end"
                        dur="0.001s"
                        values="20;4"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        begin="svgSpinners3DotsMove7.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="0;3"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove5.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="4;12"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        begin="svgSpinners3DotsMove3.end"
                        calcMode="spline"
                        dur="0.5s"
                        keySplines=".36,.6,.31,1"
                        values="12;20"
                      />
                    </circle>
                  </svg>
                </div>
              ) : (
                <div>
                  {values.productImageUrls.length === 0 ? (
                    <>
                      <div
                        onClick={selectProductGalleryImage}
                        className="font-semibold text-[14px] pt-3 pl-2 hover:cursor-pointer hover:text-blue-400"
                      >
                        Set product gallery images
                      </div>
                    </>
                  ) : (
                    <div className="">
                      <div className="grid grid-cols-4 gap-2">
                        {values.productImageUrls?.map((link) => (
                          <div key={link} className="relative group">
                            <svg
                              onClick={() => removeImage(link)}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="fill-red-500 hidden group-hover:block h-5 absolute top-1 right-1 hover:cursor-pointer"
                            >
                              <path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" />
                            </svg>
                            <img className="h-auto" src={link} />
                          </div>
                        ))}
                      </div>

                      <div
                        onClick={selectProductGalleryImage}
                        className="mt-2 hover:cursor-pointer"
                      >
                        <p className="font-medium text-green-500">
                          Add gallery images
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
}
