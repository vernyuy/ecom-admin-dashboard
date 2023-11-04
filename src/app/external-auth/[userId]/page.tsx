"use client";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  googleSignIn,
  reset,
  signup,
  updateGoogleUser,
} from "@/src/redux-store/feature/user/authSlice";
import { googleUserForm } from "@/src/types/types";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { User } from "@/src/models";
import { DataStore } from "aws-amplify";import { Amplify } from "aws-amplify";
import authService from "@/src/redux-store/feature/user/authService";
// import awsExports from "@/src/aws-exports";

// if (typeof window !== 'undefined')
// {
//   awsExports.oauth["redirectSignIn"] = `${window.location.origin}/external-auth/`;
//   awsExports.oauth["redirectSignOut"] = `${window.location.origin}/`;
//   Amplify.configure({ ...awsExports, ssr: true });
// }
// if (typeof window === "undefined")
// {
//   Amplify.configure({ ...awsExports, ssr: true });
// }

export default function Register() {
  const params = useParams()
  const [phone, setPhone] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [adLine2, setadLine2] = useState("");

    const [errors, setErrors]: any = useState({});
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    region: region,
    phone: "",
    city: "",
    country: country,
    zipCode: '',
    adLine1: "",
    adLine2: "",
  });
  const dispatch = useDispatch<AppDispatch>();

  const { user, errorMsg, isLoading, isSuccess, isGoogle }: any = useSelector(
    (state: RootState) => state.auth,
  );
  console.log("update me")
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      router.replace(`/`);
      dispatch(reset());
    }
  }, [isLoading, isSuccess, errorMsg]);


  const signupUser = async (id: string, userLogin: googleUserForm, formErrors: any) => {
    console.log("Hello")
    if (values.firstName == "")
    {
      console.log("empty")
      formErrors.firstName = "Required!";
    }
    if (values.lastName == "") {
      formErrors.lastName = "Required!";
    }
    if (values.city == "") {
      formErrors.city = "Required!";
    }
    if (values.zipCode == "") {
      formErrors.zipCode = "Required!";
    }
    if (values.adLine1 == "") {
      formErrors.adLine1 = "Required!";
    }


    if (Object.keys(formErrors).length === 0)
    {
      console.log("update")
      userLogin.address = JSON.stringify({
        coutry: country,
          region: region,
        city: values.city,
          zipCode: values.zipCode,
          addressLine1: values.adLine1,
        addressLine2: values.adLine2
      });

      console.log(userLogin);
      dispatch(updateGoogleUser({id:id, data: userLogin}))
    } else
    {
      console.log(formErrors)
      setErrors(formErrors);
    }
  
  };
  
   const onChange = (event: any) => {
    const { name, value } = event.target;
      setValues({ ...values, [name]: value });
   };
  
  
  return (
    <>
      <main className="h-scree w-full bg-white flex justify-center items-center px-36 ">
        <div className="flex justify-center items-center min-[1100px]:gap-5 gap-5 w-full">
          <div className="h-full w-full max-w-xl">
            <div className="shadow-lg rounded-md h-fi w-full px-10 py-5 min-[1100px]:px-16">
              <div className="flex justify-between">
                <h2 className="border-t-[2px] w-fit text-black text-[22px] border-green-700 font-bold">
                  Update your credentials
                </h2>
              </div>
              <form className="pb-[10px]">

                <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full">
                  <div className="mb-2 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={values.firstName}
                      name="firstName"
                onChange={onChange}
                      className="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
                      placeholder="First name"
                    /><p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.firstName}
              </p>
                  </div>

                  <div className="mb-2 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={values.lastName}
                      className="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
                      placeholder="Last name"
                      name="lastName"
                onChange={onChange}
                    />
                    <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.lastName}
              </p>
                  </div>
                </div>

                <div className="border-gray-300  w-full">
                  <div className="w-1/2 overflow-x-hidden border-gray-300">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Phone number *
                    </label>
                    <PhoneInput
                      country={"eg"}
                      enableSearch={true}
                      value={phone}
                      containerClass=""
                      buttonClass="bg-gray-50"
                      inputClass="bg-gray-50 border bg-blue-600 focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-fulld p-1.5"
                      onChange={(phone: any) => setPhone(phone)}
                    />
                  </div>
                  <p className="text-red-500 text-sm font-light pt-[6px] error">
                {phone == ""? "phone number is require": ""}
              </p>
                </div>

                <div className="flex gap-2 sm:flex-nowrap flex-wrap my-3">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Country *
                    </label>
                    <CountryDropdown
                      classes="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
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
                      classes="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
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
                      className="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
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
                      className="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
                      placeholder=""
                    />
                    <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.zipCode}
              </p>
                  </div>
                </div>

                <div className="mb-2 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Address line 1 *
                  </label>
                  <input
                    type="text"
                    id="address_line_1"
                    value={values.adLine1}
                    name="adLine1"
                onChange={onChange}
                    className="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
                    placeholder="456 Elm Street"
                  />
                  <p className="text-red-500 text-sm font-light pt-[6px] error">
                {errors?.adLine1}
              </p>
                </div>

                <div className="mb-2 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Address line 2
                  </label>
                  <input
                    type="text"
                    id="address_line_2"
                    value={values.adLine2}
                    name="adLine2"
                onChange={onChange}
                    className="bg-gray-50 border focus:border-green-500 border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-1.5"
                    placeholder="456 Elm Street"
                  />
                              </div>
                              <div className="flex gap-2">
                  <button
                    className="text-white mb-5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
                    onClick={(e) => {
                      e.preventDefault();
                      signupUser(params.userId as string, {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        phoneNumber: phone,
                        address: "",
                      }, {});
                    }}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <g>
                            <circle cx="12" cy="3" r="1" fill="currentColor">
                              <animate
                                id="svgSpinners12DotsScaleRotate0"
                                attributeName="r"
                                begin="0;svgSpinners12DotsScaleRotate2.end-0.5s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="16.5"
                              cy="4.21"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotate1"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate0.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="7.5"
                              cy="4.21"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotate2"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate4.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="19.79"
                              cy="7.5"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotate3"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate1.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="4.21"
                              cy="7.5"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotate4"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate6.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle cx="21" cy="12" r="1" fill="currentColor">
                              <animate
                                id="svgSpinners12DotsScaleRotate5"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate3.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle cx="3" cy="12" r="1" fill="currentColor">
                              <animate
                                id="svgSpinners12DotsScaleRotate6"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate8.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="19.79"
                              cy="16.5"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotate7"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate5.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="4.21"
                              cy="16.5"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotate8"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotatea.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="16.5"
                              cy="19.79"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotate9"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate7.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle
                              cx="7.5"
                              cy="19.79"
                              r="1"
                              fill="currentColor"
                            >
                              <animate
                                id="svgSpinners12DotsScaleRotatea"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotateb.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <circle cx="12" cy="21" r="1" fill="currentColor">
                              <animate
                                id="svgSpinners12DotsScaleRotateb"
                                attributeName="r"
                                begin="svgSpinners12DotsScaleRotate9.begin+0.1s"
                                calcMode="spline"
                                dur="0.6s"
                                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                                values="1;2;1"
                              />
                            </circle>
                            <animateTransform
                              attributeName="transform"
                              dur="6s"
                              repeatCount="indefinite"
                              type="rotate"
                              values="360 12 12;0 12 12"
                            />
                          </g>
                        </svg>{" "}
                        Loading...
                      </div>
                    ) : (
                      "Update"
                    )}
                  </button>

                </div>
                {/* <Button containerStyles="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center " title={isLoading? 'Loading': "Google"} handleClick={(e)=>{e.preventDefault(); googleSignin()}} btnType="submit"/> */}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
