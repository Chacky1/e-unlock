"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";

type SpinnerProps = {
  redirectPath?: string;
};

const Spinner = ({ redirectPath }: SpinnerProps) => {
  const router = useRouter();

  useEffect(() => {
    if (redirectPath) {
      const timer = setTimeout(() => {
        router.push(redirectPath);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [redirectPath, router]);

  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#1c1c1c", "#1C71B8", "#63A2F3", "#5286EF", "#003481"]}
    />
  );
};

export default Spinner;
