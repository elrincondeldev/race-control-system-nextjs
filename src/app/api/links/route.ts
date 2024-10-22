// src/app/api/links/route.ts

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const url =
      "https://magicloops.dev/api/loop/run/7adb6ec7-b5d5-469b-8e02-2a6b4a6b798f";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ input: "I love Magic Loops!" }),
    });

    const responseJson = await response.json();
    console.log("STATUS:", responseJson.status);
    console.log("OUTPUT:", responseJson.loopOutput);

    return NextResponse.json(responseJson);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
