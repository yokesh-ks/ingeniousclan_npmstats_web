import { catalog } from "@/constants/npm-catalog";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(catalog);
}
