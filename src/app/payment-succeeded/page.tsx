
import { Amplify } from "aws-amplify";
import React from "react";
import Link from "next/link";
export default function Page() {
    return (
      <main className="min-h-screen items-center justify-between p-24"> 
        <div className="mb-8 text-xl">Payment Successful</div>

        <Link href={'/products'} className="text-green-500">shop</Link> 
        
      </main>
    );
  
}
