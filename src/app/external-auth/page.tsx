"use client";

import { Auth, DataStore } from "aws-amplify";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Router, {
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { User } from "@/src/models";
import React from "react";
import Link from "next/link";
import authService from "@/src/redux-store/feature/user/authService";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const searchParams = new URLSearchParams(params);
      searchParams.set(name, value);

      return params.toString();
    },
    [params],
  );

  // if (params.has("error")) {
  //   console.log("email exists");
  //   return (
  //     <main className="min-h-screen items-center justify-between p-24">
  //       <div className="mb-8">Email already in use</div>
  //       Please{" "}
  //       <Link href={"/login"} className="text-green-500">
  //         login
  //       </Link>{" "}
  //       with email and password or{" "}
  //       <Link href={"/register"} className="text-green-500">
  //         Create
  //       </Link>{" "}
  //       a new account with a different email
  //     </main>
  //   );
  // } else {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      await authService.currentUser().then((result) => {
        const userData = {
          firstName: result.attributes.family_name
            ? result.attributes.family_name
            : "",
          lastName: result.attributes.given_name
            ? result.attributes.given_name
            : "",
          email: result.attributes.email,
          phone: result.attributes.phone_number,
          sub: result.attributes.sub,
          isActive: true,
          address: JSON.stringify({}),
        };

        DataStore.observeQuery(User).subscribe(async (event) => {
          if (event.isSynced) {
            await DataStore.query(User, (user: any) =>
              user.and((c: any) => [
                c.email.eq(result.attributes.email),
                c.sub.eq(result.attributes.sub),
              ]),
            ).then(async (data) => {
              if (data.length === 0) {
                await DataStore.save(new User(userData)).then((data) => {
                  console.log("no user");
                  router.replace(
                    `/external-auth/${data.id}` +
                      "?" +
                      createQueryString("user", JSON.stringify(data)),
                  );
                });
              }
              if (
                data.length > 0 &&
                (data[0].address === null || data[0].address === "")
              ) {
                router.replace(
                  `/external-auth/${data[0].id}` +
                    "?" +
                    createQueryString("user", JSON.stringify(data[0])),
                );
                // router.replace(`/external-auth/${JSON.stringify(data[0])}`);
              }
              if (
                data.length > 0 &&
                (data[0].address !== null || data[0].address !== "")
              ) {
                console.log("user existsssss", data);
                router.replace("/");
              }
            });
          }
        });
        console.log(result);
      });
    } catch (err) {
      console.log(err);
      router.replace("/login");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="my-auto"
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
          <circle cx="16.5" cy="4.21" r="1" fill="currentColor">
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
          <circle cx="7.5" cy="4.21" r="1" fill="currentColor">
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
          <circle cx="19.79" cy="7.5" r="1" fill="currentColor">
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
          <circle cx="4.21" cy="7.5" r="1" fill="currentColor">
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
          <circle cx="19.79" cy="16.5" r="1" fill="currentColor">
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
          <circle cx="4.21" cy="16.5" r="1" fill="currentColor">
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
          <circle cx="16.5" cy="19.79" r="1" fill="currentColor">
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
          <circle cx="7.5" cy="19.79" r="1" fill="currentColor">
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
      </svg>
    </main>
  );
}
// }
