"use client";

import { Auth, DataStore } from "aws-amplify";
import { useEffect, useLayoutEffect, useState } from "react";
import Router, { useSearchParams, useRouter } from "next/navigation";
import { User } from "@/src/models";
import React from "react";
import Link from "next/link";
import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUser,
  googleSignIn,
  reset,
  signOut,
  signin,
} from "@/src/redux-store/feature/user/authSlice";
import authService from "@/src/redux-store/feature/user/authService";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { user, errorMsg, isLoading, isSuccess, isError, isGoogle }: any =
    useSelector((state: RootState) => state.auth);
  
  if (params.has("error")) {
    console.log("email exists");
    return (
      <main className="min-h-screen items-center justify-between p-24">
        <div className="mb-8">Email already in use</div>
        Please{" "}
        <Link href={"/login"} className="text-green-500">
          login
        </Link>{" "}
        with email and password or{" "}
        <Link href={"/register"} className="text-green-500">
          Create
        </Link>{" "}
        a new account with a different email
      </main>
    );
  } else {
    useEffect(() => {
      const currentUser = async () => {
        await authService.currentUser().then((result) => {
        console.log(result);
      });
      }
      getUser()
    }, []);

    const getUser = async () => {
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
            address: JSON.stringify({coutry: 'test'}),
        };

        DataStore.observeQuery(User).subscribe(async (event) => {
          if (event.isSynced)
          {
              console.log(event.isSynced)
              await DataStore.query(User, (user) =>
                user.email.eq(result.attributes.email),
              ).then(async (data) => {
                console.log(data);
                if (data.length === 0) {
                  await DataStore.save(new User(userData)).then((data) => {
                    console.log(data)
                    router.replace(`/external-auth/${data.id}`)
                  });
                } else
                {
                  router.replace('/')
                }
              });
            }
          });
        console.log(result);
      });
      };
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Collecting your data. Please be patient
      </main>
    );
  }
}
