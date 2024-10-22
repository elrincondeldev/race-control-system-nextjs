// // src/app/api/links/route.ts

// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function POST(request: NextRequest) {
//   try {
//     const { name } = await request.json();
//     if (!name) {
//       return NextResponse.json({ error: "Name is required" }, { status: 400 });
//     }

//     const newLink = await prisma.link.create({
//       data: {
//         url: `https://cesar-gym.vercel.app/${name}`,
//         active: true,
//         uses: 1,
//       },
//     });

//     const response = NextResponse.json(newLink, { status: 201 });
//     // Set CORS headers
//     response.headers.set("Access-Control-Allow-Origin", "*");
//     response.headers.set(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, OPTIONS"
//     );
//     response.headers.set(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );
//     return response;
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const url =
//       "https://magicloops.dev/api/loop/run/7adb6ec7-b5d5-469b-8e02-2a6b4a6b798f";

//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify({ input: "I love Magic Loops!" }),
//     });

//     const responseJson = await response.json();
//     console.log("STATUS:", responseJson.status);
//     console.log("OUTPUT:", responseJson.loopOutput);

//     return NextResponse.json(responseJson);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// // Handle OPTIONS method for CORS preflight requests
// export async function OPTIONS(request: NextRequest) {
//   const response = NextResponse.json({}, { status: 204 });
//   response.headers.set("Access-Control-Allow-Origin", "*");
//   response.headers.set(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   response.headers.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );
//   return response;
// }
