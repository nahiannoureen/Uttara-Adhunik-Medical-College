import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { PrincipalMessage } from "@/lib/model/principalMessage";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: Request, context: RouteContext) {
  try {
    await dbConnect();

    const { id } = await context.params;

    const principalMessage = await PrincipalMessage.findById(id);

    if (!principalMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Principal message not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: principalMessage,
    });
  } catch (error) {
    console.error("GET Principal Message Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch principal message",
      },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request, context: RouteContext) {
  try {
    await dbConnect();

    const { id } = await context.params;

    const body = await request.json();

    const { principalName, message, signatureImage, principalImage } = body;

    if (!principalName || !message || !signatureImage || !principalImage) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const updatedPrincipalMessage = await PrincipalMessage.findByIdAndUpdate(
      id,
      {
        principalName,
        message,
        signatureImage,
        principalImage,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedPrincipalMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Principal message not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Principal message updated successfully",
      data: updatedPrincipalMessage,
    });
  } catch (error) {
    console.error("PUT Principal Message Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update principal message",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request, context: RouteContext) {
  try {
    await dbConnect();

    const { id } = await context.params;

    const deletedPrincipalMessage =
      await PrincipalMessage.findByIdAndDelete(id);

    if (!deletedPrincipalMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Principal message not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Principal message deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Principal Message Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete principal message",
      },
      { status: 500 },
    );
  }
}
