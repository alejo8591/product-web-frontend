import { NextResponse } from "next/server";
import data from "productWeb/mocks/data.json";

export async function GET() {
  return NextResponse.json(data);
}