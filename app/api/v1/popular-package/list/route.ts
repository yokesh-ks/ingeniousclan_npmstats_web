import { packages } from "@/constants/popular-packages";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(packages);
}
