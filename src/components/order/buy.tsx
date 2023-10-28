"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";

import Button from "@/components/ui/button";

interface BuyProps {
  priceId: string;
  nextStripePublicKey: string;
  courseId: number;
}

const Buy = ({ priceId, nextStripePublicKey, courseId }: BuyProps) => {
  const router = useRouter();
  const { userId } = useAuth();

  const onBuyClick = async () => {
    const stripe = await loadStripe(nextStripePublicKey);

    if (!stripe) {
      return toast.error("🚨 Une erreur est survenue", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      successUrl: `${window.location.origin}/order/success?courseId=${courseId}&userCode=${userId}`,
      cancelUrl: `${window.location.origin}/order/cancel`,
    });

    if (error) {
      console.log(error);
    }
  };

  const onSignInClick = () => {
    const currentPath = window.location.pathname;
    router.push(`/sign-in?redirect=${currentPath}`);
  };

  return (
    <>
      {userId ? (
        <Button variant="secondary" style={{color: "#fff"}} onClick={onBuyClick}>
          Acheter
        </Button>
      ) : (
        <Button variant="secondary" style={{color: "#fff"}} onClick={onSignInClick}>
          Acheter
        </Button>
      )}
    </>
  );
};

export default Buy;
