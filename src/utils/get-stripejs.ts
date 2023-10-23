import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51NVJ4RECpTjJRRCoQpMKiBjIa9M5wLj4gyyJvEoH1d75wFy0c3s4GzvobdrTM2cAorsurtmDdsklVY7h9wbN3abi00pla6kYZI");
  }
  return stripePromise;
};

export default getStripe;
