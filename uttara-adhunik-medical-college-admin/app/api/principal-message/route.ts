import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import { PrincipalMessage } from "@/lib/model/principalMessage";

export async function GET() {
  try {
    await connectToDB();

    const data = await PrincipalMessage.findOne()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: data || null,
    });
  } catch (error) {
    console.error("GET Principal Message Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch principal message",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDB();

    const body = await request.json();

    const { principalName, description, principalImage, principalSignImage } =
      body;

    if (
      !principalName ||
      !description ||
      !principalImage ||
      !principalSignImage
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const data = await PrincipalMessage.create({
      principalName,
      description,
      principalImage,
      principalSignImage,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Principal message created successfully",
        data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST Principal Message Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create principal message",
      },
      { status: 500 },
    );
  }
}
