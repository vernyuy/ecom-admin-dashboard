import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

/***
 * 
 *      Note this api has to accept POST request with cart items passed
 *        as the request body.  Using GET request is just for testing 
 *          with static data
 * 
 */
const stripe = new Stripe(
  "sk_test_51NVJ4RECpTjJRRCodmsyMIK613vbK0ElhyUwMReszzx6qs8FzZQDdi8VtZ5DjYkn5gNQryjTDMNkf01QLKVwxwTP00DT8HavNL",
  {
    typescript: true,
    apiVersion: "2023-10-16",
  },
);

const endpointSecret = ' whsec_56f0d5ae6e9dc33117a20cf1ce3b01aeb48b6f3c71e2653eb7aba0036d56a0b0';



export async function POST(req: any, response: NextResponse) {

    const payload = req.body;
    const sig = req.headers['stripe-signature'];
    console.log("EventHeade keys: ",req.headers.keys())
  
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      console.log(event)
    } catch (err) {
        return new NextResponse('failed')
    }
}
