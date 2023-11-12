"use client";

import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";

import Button from "@/components/ui/button";
import { OrderStatus } from "@/lib/api/learning/schema/order.schema";

interface BuyProps {
  priceId: string;
  nextStripePublicKey: string;
  courseId: number;
  hasUserBoughtCourse: boolean;
}

const Buy = ({
  priceId,
  nextStripePublicKey,
  courseId,
  hasUserBoughtCourse,
}: BuyProps) => {
  const router = useRouter();
  const { userId } = useAuth();

  const onSignInClick = () => {
    const currentPath = window.location.pathname;
    router.push(`/sign-in?redirect=${currentPath}`);
  };

  if (!userId)
    return (
      <Button
        variant="secondary"
        style={{ color: "#fff" }}
        onClick={onSignInClick}
      >
        Acheter
      </Button>
    );

  const redirectToDashboard = () => {
    router.push(`/profile/${userId}`);
  };

  const createOrderOrFail = async (
    userId: string,
    courseId: number,
    status: OrderStatus
  ) => {
    try {
      const order = await fetch("/order/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          userCode: userId,
          courseId,
          status,
        }),
      });

      return order.json();
    } catch (error) {
      console.error(error);
    }
  };

  const buyCourse = async () => {
    try {
      console.log(
        `Creating a PENDING order for user ${userId} and course ${courseId}...`
      );
      const order = await createOrderOrFail(
        userId,
        courseId,
        OrderStatus.PENDING
      );

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
        successUrl: `${window.location.origin}/order/success?orderId=${order.id}&userCode=${userId}`,
        cancelUrl: `${window.location.origin}/order/cancel?orderId=${order.id}`,
      });

      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
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
  };

  return (
    <>
      {hasUserBoughtCourse ? (
        <Button
          variant="secondary"
          style={{ color: "#fff" }}
          onClick={redirectToDashboard}
        >
          Suivre le cours
        </Button>
      ) : (
        <Button
          variant="secondary"
          style={{ color: "#fff" }}
          onClick={buyCourse}
        >
          Acheter
        </Button>
      )}
    </>
  );
};

export default Buy;
