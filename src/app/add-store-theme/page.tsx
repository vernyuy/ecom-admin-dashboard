"use client";
import DashboardLayout from "@/src/app/dashboardLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Feedback } from "@/src/components";
import { S3BucketLink } from "@/src/constants";
import { Storage } from "aws-amplify";
import { ChromePicker } from "react-color";
import Carousel from "@/src/components/Carousel";
import storeService from "@/src/redux-store/feature/store/storeService";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default function Page() {
  const [isComplete, setIsComplete] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [next, setNext] = useState(false);
  const [states, setStates] = useState({
    isLoading: false,
    logo: false,
    showPicker: false,
    colErr: "",
  });
  const [errors, setErrors]: any = useState({});
  const [values, setValues] = useState({
    name: "",
    primaryColor: "",
    secondaryColor: "",
    mainColor: "",
    logoUrl: "",
    currency: "",
    fontType: "",
    description: "",
    ownerEmail: "",
    city: "",
    zipCode: "",
    country: country,
    region: region,
  });

  const [theme, settheme]: any[] = useState([]);
  const themeData = async () => {
    const response = await storeService.listTheme();
    settheme(response);
  };
  useEffect(() => {
    themeData();
    setValues({
      name: theme[0]?.name,
      city: theme[0]?.city,
      country: theme[0]?.country,
      currency: theme[0]?.currency,
      region: theme[0]?.region,
      ownerEmail: theme[0]?.ownerEmail,
      zipCode: theme[0]?.zipCode,
      description: theme[0]?.description,
      fontType: theme[0]?.fontType,
      mainColor: theme[0]?.mainColor,
      primaryColor: theme[0]?.primaryColor,
      secondaryColor: theme[0]?.secondaryColor,
      logoUrl: theme[0]?.logoUrl,
    });
    setPhone(theme[0]?.phone);
    setCountry(theme[0]?.country);
    setRegion(theme[0]?.region);
    console.log(theme[0]);
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
    if (values.currency == "") {
      formErrors.currency = "Required!";
    }
    if (values.mainColor == "") {
      formErrors.mainColor = "Required!";
    }
    if (values.primaryColor == "") {
      formErrors.primaryColor = "Required!";
    }
    if (values.secondaryColor == "") {
      formErrors.secondaryColor = "Required!";
    }
    if (values.logoUrl == "") {
      formErrors.logoUrl = "Required!";
    }
    if (Object.keys(formErrors).length === 0) {
      setStates({ ...states, ["isLoading"]: true });
      console.log(values);
      await storeService
        .updateTheme({ id: theme[0].id, carousel: values })
        .then((result) => {
          const finalResult: any = result.result;
          console.log(finalResult);
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
    setValues({ ...values, [name]: value });
  };

  const handleFocus = (event: any, formErrors: any) => {
    const { value, name } = event;
    if (name == "title" && value == "") {
      formErrors.title = "Required!";
    }
    if (name == "backgroundColor" && value == "") {
      formErrors.backgroundColor = "Required!";
    }
    return formErrors;
  };

  const handleImage = (value: string) => {
    document.getElementById(value)?.click();
  };

  const setlogoUrl = async (event: any) => {
    setStates({ ...states, ["logo"]: true });
    try {
      let file = event.target.files[0];
      const key = await Storage.put(file.name.replace(" ", "_"), file, {
        level: "public",
        contentType: "image/png",
      });

      if (key) {
        setValues({ ...values, [event.target.name]: S3BucketLink + key.key });
      }
    } catch (error) {
      console.log(error);
    }
    setStates({ ...states, ["logo"]: false });
  };

  const handleTextChange = (color: any) => {
    setValues({ ...values, ["primaryColor"]: color.hex });
  };
  const handleMainChange = (color: any) => {
    setValues({ ...values, ["mainColor"]: color.hex });
  };
  const handlePrimaryChange = (color: any) => {
    setValues({ ...values, ["primaryColor"]: color.hex });
  };
  const handleSecondaryChange = (color: any) => {
    setValues({ ...values, ["secondaryColor"]: color.hex });
  };

  return (
    <DashboardLayout
    // mainColor={values.mainColor}
    // primaryColor={values.primaryColor}
    // secondaryColor={values.secondaryColor}
    // logo={values.logoUrl}
    >
      {isComplete && (
        <Feedback
          resetIsComplete={resetIsComplete}
          errorMsg={errorMsg}
          msg="Product saved!"
        />
      )}

      <div className="bg-">
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
                <span
                  className="ml-1 text-gray-400 md:ml-2"
                  aria-current="page"
                >
                  Configure Brand
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <form
          onSubmit={(e) => handleSubmit(e, {})}
          className={
            "min-[1200px]:flex h-full w-full gap-10 max-[1200px]:space-y-5"
          }
        >
          <div className={"w-full"}>
            <div className="w-full space-y-2.5 bg-white rounded p-4">
              <div className={!next ? "w-full" : "hidden"}>
                <div className="sm:flex gap-5">
                  <div className="w-full">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="course"
                    >
                      Brand Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                        errors?.name && "border-red-500"
                      }`}
                      placeholder="Enter brand name"
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
                      Brand Email
                    </label>
                    <input
                      type="email"
                      name="ownerEmail"
                      className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                        errors?.name && "border-red-500"
                      }`}
                      placeholder="Enter brand email"
                      value={values.ownerEmail}
                      onChange={onChange}
                      onBlur={(e) => setErrors(handleFocus(e.target, {}))}
                    />
                    <p className="text-red-500 text-sm font-light pt-[6px] error">
                      {errors?.email}
                    </p>
                  </div>
                </div>

                <div className="border-gray-300  w-full">
                  <div className="overflow-x-hidden w-full sm:w-1/2 pr-4 border-gray-300">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Brand number
                    </label>
                    <PhoneInput
                      country={"eg"}
                      enableSearch={true}
                      value={phone}
                      containerClass=""
                      inputStyle={{
                        width: "100%",
                      }}
                      onChange={(phone: any) => setPhone(phone)}
                    />
                  </div>
                  <p className="text-red-500 text-sm font-light pt-[6px] error">
                    {phone == "" ? "phone number is require" : ""}
                  </p>
                </div>

                <div className="flex gap-2 sm:flex-nowrap flex-wrap my-3">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Country *
                    </label>
                    <CountryDropdown
                      classes={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                        errors?.name && "border-red-500"
                      }`}
                      value={country}
                      name="country"
                      onChange={(val) => setCountry(val)}
                    />

                    <p className="text-red-500 text-sm font-light pt-[6px] error">
                      {errors?.country}
                    </p>
                  </div>

                  <p className="text-red-500 text-sm font-light pt-[6px] error">
                    {errors?.country}
                  </p>

                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Region *
                    </label>
                    <RegionDropdown
                      classes={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                        errors?.name && "border-red-500"
                      }`}
                      country={country}
                      name="region"
                      value={region}
                      onChange={(val) => setRegion(val)}
                    />
                  </div>
                  <p className="text-red-500 text-sm font-light pt-[6px] error">
                    {errors?.region}
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="mb-2 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={values.city}
                      name="city"
                      onChange={onChange}
                      className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                        errors?.name && "border-red-500"
                      }`}
                      placeholder="San fransisco"
                    />
                    <p className="text-red-500 text-sm font-light pt-[6px] error">
                      {errors?.city}
                    </p>
                  </div>

                  <div className="mb-2 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      ZIP code
                    </label>
                    <input
                      type="text"
                      id="zipecode"
                      value={values.zipCode}
                      name="zipCode"
                      onChange={onChange}
                      className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                        errors?.name && "border-red-500"
                      }`}
                      placeholder=""
                    />
                    <p className="text-red-500 text-sm font-light pt-[6px] error">
                      {errors?.zipCode}
                    </p>
                  </div>
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
                    type="button"
                    onClick={() => {
                      console.log(values);
                      setNext(true);
                    }}
                    // disabled={states.isLoading}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 "
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
                      Next
                    </span>
                  </button>
                </div>
              </div>

              <div className={next ? "block" : "hidden"}>
                <div className="w-full">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="course"
                  >
                    Prefered currency
                  </label>
                  <input
                    type="text"
                    name="currency"
                    className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                      errors?.currency && "border-red-500"
                    }`}
                    placeholder="Select Currency"
                    // value={values.descrption}
                    onChange={onChange}
                    onBlur={(e) => setErrors(handleFocus(e.target, {}))}
                  />
                  <p className="text-red-500 text-sm font-light pt-[6px] error">
                    {errors?.currency}
                  </p>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="fonts"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Choose a font
                  </label>
                  <select
                    id="fonts"
                    name="fontType"
                    className={`w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none ${
                      errors?.fontType && "border-red-500"
                    }`}
                  >
                    <option value="">Serif</option>
                    <option value="poppins">Poppins</option>
                    <option value="serif">Serif</option>
                    <option value="verdana">Verdana</option>
                    <option value="georgia">Georgia</option>
                    <option value="luminari">Luminari</option>
                  </select>
                </div>

                <div className="flex flex-wrap"></div>

                <div className="flex justify-left items-centgter gap-2">
                  <div className="flex gap-4 flex-wrap">
                    <div>
                      <p>Main Color</p>
                      <ChromePicker
                        color={values.mainColor}
                        className="h-1/2 w-[40px]"
                        onChangeComplete={handleMainChange}
                      />
                    </div>
                    {/* <div>
                      <p>Primary color</p>
                      <ChromePicker
                        color={values.primaryColor}
                        className="h-1/2 w-[40px]"
                        onChangeComplete={handlePrimaryChange}
                      />
                    </div> */}
                    {/* <div>
                      <p>Secondary Color</p>
                      <ChromePicker
                        color={values.secondaryColor}
                        className="h-1/2 w-[40px]"
                        onChangeComplete={handleSecondaryChange}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className={next ? "block" : "hidden"}>
              <div className={`flex justify-between items-center`}>
                <div>
                  <button
                    type="button"
                    onClick={() => setNext(false)}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 "
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
                      Prev
                    </span>
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={states.isLoading}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 "
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

          <div className={next ? "block w-full" : "hidden"}>
            <div className="w-full space-y-5 gap-5">
              <div className="w-full max-[1199px]:flex min-[1200px]:max-w-[350px] space-y-5 gap-5">
                <div
                  className={`bg-white w-full ${
                    errors.logoUrl &&
                    values.logoUrl == "" &&
                    "border border-red-500"
                  }`}
                >
                  <div className="h-[50px] px-4 flex items-center border-b-[2.5px] ">
                    <p className="font-bold text-blue-400">Brand Logo</p>
                  </div>
                  <div className="min-h-[60px] p-2.5 pl-4">
                    <input
                      id="logoUrl"
                      type="file"
                      name="logoUrl"
                      accept=".jpeg, .png, .jpg"
                      onChange={setlogoUrl}
                      hidden
                    />

                    {states.logo ? (
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
                        {values.logoUrl == "" ? (
                          <>
                            <div
                              onClick={() => handleImage("logoUrl")}
                              className="font-semibold text-[14px] pt-2 hover:cursor-pointer hover:text-blue-400"
                            >
                              Set Brand Logo
                            </div>
                          </>
                        ) : (
                          <div className="">
                            <img className="h-36" src={values.logoUrl} />
                            <div
                              onClick={() => handleImage("logoUrl")}
                              className="mt-2 hover:cursor-pointer"
                            >
                              <p className="font-medium text-green-500">
                                Change logo
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {values.logoUrl == "" && (
                      <div className="text-red-500 pt-2">{errors?.logoUrl}</div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <h5>Brand name</h5>
                  <h3
                    className="font-extrabold text-xl"
                    style={{
                      color:
                        values.primaryColor !== "" ? values.primaryColor : "",
                    }}
                  >
                    {values.name}
                  </h3>
                </div>

                <div>
                  <h5>Brand email</h5>
                  <h3
                    className="font-extrabold text-sm"
                    // style={{
                    //   color: values.primaryColor !== "" ? values.primaryColor : "",
                    // }}
                  >
                    {values.ownerEmail}
                  </h3>
                </div>

                <div>
                  <h5>Brand country</h5>
                  <h3 className="font-extrabold text-sm">{country}</h3>
                </div>

                <div>
                  <h5>Brand region</h5>
                  <h3 className="font-extrabold text-sm">{region}</h3>
                </div>
                <div>
                  <h5>Brand city</h5>
                  <h3 className="font-extrabold text-sm">{values.city}</h3>
                </div>

                <div>
                  <h5>Prefered currency</h5>
                  <h3 className="font-extrabold text-lg">{values.currency}</h3>
                </div>
              </div>
              <div>
                <p className="text-center font-bold">Colors</p>
                <div className="sm:flex gap-2 text-[14px] flex-wrap">
                  <div>
                    main
                    <div
                      className={`h-10 w-10 rounded-full text-white mx-auto`}
                      style={{ backgroundColor: values.mainColor }}
                    ></div>
                  </div>
                  <div>
                    primary
                    <div
                      className={`h-10 w-10 rounded-full text-white mx-auto`}
                      style={{ backgroundColor: values.primaryColor }}
                    ></div>
                  </div>

                  <div>
                    secondary
                    <div
                      className={`h-10 w-10 rounded-full text-white mx-auto`}
                      style={{ backgroundColor: values.secondaryColor }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
