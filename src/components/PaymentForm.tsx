// "use client";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";
// import React from "react";

// export default function PaymentForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const cardElement = elements?.getElement("card");

//     try {
//       if (!stripe || !cardElement) return null;
//       const { data } = await axios.post("/api/create-payment-intent", {
//         data: { amount: 1 },
//       });
//       const clientSecret = data;
//       await stripe?.confirmCardPayment(clientSecret, {
//         payment_method: { card: cardElement },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <CardElement />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    // const pay = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     // Make sure to change this to your payment completion page
    //     return_url: `${window.location.origin}/products`,
    //   },
    //   redirect: "if_required",
    // });

    // console.log("pay : ", pay);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/products`,
      },
      redirect: "if_required",
    });

    if (error) {
      const err: any = error?.message;
      setMessage(err);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment succeeded");
    } else {
      setMessage("unexpected error occured");
    }

    console.log("error : ", error);

    // if (error.type === "card_error" || error.type === "validation_error") {
    //   const err: any = error?.message;
    //   setMessage(err);
    // } else {
    //   setMessage("An unexpected error occured.");
    // }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button
        className="text-white mb-5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-5"
        disabled={isProcessing || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div className="text-red-500" id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}
