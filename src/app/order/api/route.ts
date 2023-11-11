import { NextResponse } from "next/server";

import clientApiLearning from "@/lib/api/learning/client";

export const POST = async (
  req: Request,
) => {
  const { userCode, courseId, status } = await req.json();

  try {
    const order = await clientApiLearning.createOrderOrFail(
      userCode,
      courseId,
      status
    );
    return NextResponse.json(order);
  } catch (error) {
    console.error("[createOrderOrFail] error : ", error);
    return NextResponse.json(error, { status: 500 });
  }
};
