"use server"
import { prisma } from "@/lib/db";
import { getStripeSession } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { getUser } from "./actionsUsers";
import {stripe} from "@/lib/stripe"
import { unstable_noStore as noStore } from "next/cache";



export const getDataStripeUser = async (userId: string) => {
  noStore()
  const data = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
      user: {
        select: {
          stripeCustomerId: true
        }
      }
    }
  });

  return data
}


export const createSubscription = async () => {
  const user = await getUser();
    
  const dbUser = await prisma.user.findUnique({
    where: {
      id: user?.id
    },
    select: {
      stripeCustomerId:true
    }
  })

  const subscriptionUrl = await getStripeSession({
    customerId: dbUser?.stripeCustomerId as string ,
    domainUrl: "https://sass-next-mdc.vercel.app",
    priceId: process.env.STRIPE_API_ID as string
  });


  return redirect(subscriptionUrl);
};



export const createCustomerPortal = async ()=>{
  const user = await getUser();
  const session = await stripe.billingPortal.sessions.create({
    customer: user?.stripeCustomerId as string,
    return_url: "https://sass-next-mdc.vercel.app/dashboard/payment",
  })
  return redirect(session.url)
}



