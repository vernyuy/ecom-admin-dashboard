"use client";
import DashboardLayout from "@/src/app/dashboardLayout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "@/src/components";

const stripePromise = loadStripe(
  "pk_test_51NVJ4RECpTjJRRCoQpMKiBjIa9M5wLj4gyyJvEoH1d75wFy0c3s4GzvobdrTM2cAorsurtmDdsklVY7h9wbN3abi00pla6kYZI",
);
export default function Home() {
  return (
    <>
      <DashboardLayout>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </DashboardLayout>
    </>
  );
}
