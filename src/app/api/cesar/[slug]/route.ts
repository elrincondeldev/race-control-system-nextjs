// src/app/api/cesar/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    // Verifica si el enlace existe en la base de datos
    const link = await prisma.link.findFirst({
      where: { url: `https://cesar-gym.vercel.app/${slug}` },
    });

    if (!link) {
      return NextResponse.json({ error: "Link not found" }, { status: 404 });
    }

    if (link.uses <= 0) {
      return NextResponse.json(
        { error: "No remaining uses for this link" },
        { status: 410 }
      );
    }

    // Actualiza el número de usos restantes
    await prisma.link.update({
      where: { id: link.id },
      data: { uses: link.uses - 1 },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
