import Data from "@/model/carnet";
import connectToDatabase from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();

  const data = await Data.find().sort("-createdAt");
  return NextResponse.json({ message: data });
}
