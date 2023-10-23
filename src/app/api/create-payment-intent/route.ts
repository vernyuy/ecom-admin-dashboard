import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51NVJ4RECpTjJRRCodmsyMIK613vbK0ElhyUwMReszzx6qs8FzZQDdi8VtZ5DjYkn5gNQryjTDMNkf01QLKVwxwTP00DT8HavNL",
  {
    typescript: true,
    apiVersion: "2023-10-16",
  },
);

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const { amount } = data;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "USD",
    });
    console.log("payment : ", paymentIntent);
    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
