import Data from "@/model/carnet";
import connectToDatabase from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  try {
    const data = await Data.find().sort("-createdAt");
    return NextResponse.json({ message: data });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export const revalidate = 10;
