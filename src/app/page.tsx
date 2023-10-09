"use client";

import { RootState } from "../redux-store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../redux-store/feature/counter/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md lg:flex">
        Welcome to ro-groups e-commerce admin dashboard test
        <div className="align-items items-center">
          <p className="text-xl">Testing State in Redux</p>
          <button
            className="border rounded-md px-2 mb-3"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <p className="text-6xl">{count}</p>
          <button
            className="border rounded-md px-2 mt-3"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </main>
  );
}
