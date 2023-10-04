import Data from "@/model/carnet";
import connectToDatabase from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  try {
    const data = await Data.find({}).sort("-createdAt");
    return NextResponse.json({ message: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
