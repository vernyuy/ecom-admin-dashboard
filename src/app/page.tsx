"use client";
// import DashboardLayout from "@/src/app/dashboardLayout";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { PaymentForm } from "@/src/components";

// const stripePromise = loadStripe(
//   "pk_test_51NVJ4RECpTjJRRCoQpMKiBjIa9M5wLj4gyyJvEoH1d75wFy0c3s4GzvobdrTM2cAorsurtmDdsklVY7h9wbN3abi00pla6kYZI",
// );
// export default function Home() {
//   return (
//     <>
//       <DashboardLayout>
//         <Elements stripe={stripePromise}>
//           <PaymentForm />
//         </Elements>
//       </DashboardLayout>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "@/src/components";
import { loadStripe } from "@stripe/stripe-js";
function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    const setProm = async () => {
      const stripePromise: any = await loadStripe(
        "pk_test_51NVJ4RECpTjJRRCoQpMKiBjIa9M5wLj4gyyJvEoH1d75wFy0c3s4GzvobdrTM2cAorsurtmDdsklVY7h9wbN3abi00pla6kYZI",
      );
      setStripePromise(stripePromise);
      console.log(stripePromise);
    };
    setProm();
  }, []);
  useEffect(() => {
    const getSecrete = async () => {
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 1 },
      });
      const clientSecret = data;
      setClientSecret(clientSecret);
    };
    getSecrete();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full pt-16 px-6">
        <div className="w-full max-w-screen-sm">
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <PaymentForm />
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}

export default Payment;
