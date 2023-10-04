import Carnet from "@/model/carnet";
import connectToDatabase from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connectToDatabase();
  const { formData } = await req.json();
  try {
    await Carnet.create({ formData });
    return NextResponse.json({ message: "Note Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
