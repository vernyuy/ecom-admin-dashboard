"use client";
import DashboardLayout from "@/src/app/dashboardLayout";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Feedback } from "@/src/components";
import categoryService from "@/src/redux-store/feature/category/categoryService";
import { Storage } from "aws-amplify";
import { S3BucketLink } from "@/src/constants";
export default function UpdateCategory(props: any) {
  const searchParams = useSearchParams();
  const [isComplete, setIsComplete] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [states, setStates] = useState({
    isLoading: false,
    catMsg: false,
  });
  const [errors, setErrors]: any = useState({});
  const [values, setValues] = useState({
    id: "",
    name: "",
    description: "",
    isParent: false,
    parentCategoryId: "",
    categoryImageUrl: "",
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let cat: any = {};
    cat.id = searchParams.get("id");
    cat.name = searchParams.get("name");
    cat.description = searchParams.get("description");
    cat.parentCategoryId = searchParams.get("parentCategoryId");
    cat.categoryImageUrl = searchParams.get("categoryImageUrl");
    cat.isParent = searchParams.get("isParent");
    if (cat.isParent == "true") {
      cat.isParent = true;
    } else {
      cat.isParent = false;
    }
    setValues(cat);
    const listCategories = async () => {
      await categoryService.listCategories().then((result) => {
        const cat: any = result.result;
        setCategories(cat);
      });
    };
    listCategories();
  }, []);

  const resetIsComplete = () => {
    setIsComplete(false);
    setErrorMsg("");
  };

  const handleSubmit = async (event: any, formErrors: any) => {
    event.preventDefault();
    if (values.name == "") {
      formErrors.name = "Required!";
    }
    if (values.description == "") {
      formErrors.description = "Required!";
    }

    if (!values.isParent && values.parentCategoryId == "") {
      formErrors.parentCategoryId =
        "Please select a parent category if this is not a parent category";
    }
    if (values.isParent && values.parentCategoryId != "") {
      setValues({ ...values, ["parentCategoryId"]: "" });
    }
    if (Object.keys(formErrors).length === 0) {
      setStates({ ...states, ["isLoading"]: true });
      await categoryService.updateCategory(values).then((result) => {
        const finalResult: any = result.result;
        setIsComplete(true);
        if (!result.success) {
          setErrorMsg(finalResult.message);
        }
        setStates({ ...states, ["isLoading"]: false });
      });
    } else {
      setErrors(formErrors);
    }
  };
  const onChange = (event: any) => {
    const { name, value } = event.target;
    if (name == "isParent") {
      setValues({ ...values, [name]: !values.isParent });
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  const handleFocus = (event: any, formErrors: any) => {
    const { value, name } = event;
    if (name == "name" && value == "") {
      formErrors.name = "Required!";
    }
    if (name == "description" && value == "") {
      formErrors.description = "Required!";
    }
    return formErrors;
  };
  const handleImage = (value: string) => {
    document.getElementById(value)?.click();
  };
  const setCategoryImage = async (event: any) => {
    setStates({ ...states, ["catMsg"]: true });
    let file = event.target.files[0];
    const key = await Storage.put(file.name.replace(" ", "_"), file, {
      level: "public",
      contentType: "image/png",
    });
    if (key) {
      setValues({ ...values, [event.target.name]: S3BucketLink + key.key });
    }
    setStates({ ...states, ["catMsg"]: false });
  };

  return (
    <DashboardLayout>
      {isComplete && (
        <Feedback
          resetIsComplete={resetIsComplete}
          errorMsg={errorMsg}
          msg="Category successfully updated!"
        />
      )}

      <nav className="flex mb-5 pt-3" aria-label="Breadcrumb">
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
              <span className="ml-1 text-gray-400 md:ml-2 " aria-current="page">
                Add category
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
                Category name
              </label>
              <input
                type="text"
                name="name"
                className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                  errors?.name && "border-red-500"
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

            {values.isParent ? (
              <div className="flex w-full gap-3 pb-2">
                <div className="flex w-full items-center pl-4 border border-gray-200 rounded">
                  <input
                    id="isParent"
                    type="checkbox"
                    name="isParent"
                    onChange={onChange}
                    checked
                    className="w-4 h-4  bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                  />
                  <label
                    htmlFor="isParent"
                    id="isParentLabel"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 hover:cursor-pointer"
                  >
                    Is parent
                  </label>
                </div>
              </div>
            ) : (
              <div className="flex w-full gap-3 pb-2">
                <div className="flex w-full items-center pl-4 border border-gray-200 rounded">
                  <input
                    id="isParent"
                    type="checkbox"
                    name="isParent"
                    onChange={onChange}
                    className="w-4 h-4  bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                  />
                  <label
                    htmlFor="isParent"
                    id="isParentLabel"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 hover:cursor-pointer"
                  >
                    Is parent
                  </label>
                </div>
              </div>
            )}

            {!values.isParent && (
              <div className="py-2">
                <div className="flex">
                  <button
                    type="button"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l outline-none"
                  >
                    Category
                  </button>
                  <select
                    name="parentCategoryId"
                    value={values.parentCategoryId}
                    onChange={onChange}
                    onBlur={(e) => setErrors(handleFocus(e.target, {}))}
                    className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded-r outline-none ${
                      errors?.parentCategoryId && "border-red-500"
                    }`}
                  >
                    <option>Select a category</option>
                    {categories.map((cat: any) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-red-500 text-sm font-light pt-[6px] error">
                  {errors?.parentCategoryId}
                </p>
              </div>
            )}

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
                  errors?.description && "border-red-500"
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
            <div className={`flex justify-between items-center`}>
              <div></div>
              <button
                type="submit"
                disabled={states.isLoading}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
              >
                <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  {states.isLoading && (
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
              errors.categoryImageUrl &&
              values.categoryImageUrl == "" &&
              "border border-red-500"
            }`}
          >
            <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
              <p className="font-bold text-blue-400">Category image</p>
            </div>
            <div className="min-h-[60px] p-2.5 pl-4">
              <input
                id="categoryImageUrl"
                type="file"
                name="categoryImageUrl"
                accept=".jpeg, .png, .jpg"
                onChange={setCategoryImage}
                hidden
              />

              {states.catMsg ? (
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
                  {values.categoryImageUrl == "" ? (
                    <>
                      <div
                        onClick={() => handleImage("categoryImageUrl")}
                        className="font-semibold text-[14px] pt-2 hover:cursor-pointer hover:text-blue-400"
                      >
                        Set category image
                      </div>
                    </>
                  ) : (
                    <div className="">
                      <img className="h-auto" src={values.categoryImageUrl} />
                      <div
                        onClick={() => handleImage("productImage")}
                        className="mt-2 hover:cursor-pointer"
                      >
                        <p className="font-medium text-green-500">Edit image</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {values.categoryImageUrl == "" && (
                <div className="text-red-500 pt-2">
                  {errors?.categoryImageUrl}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
}
