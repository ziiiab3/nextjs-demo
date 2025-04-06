import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
  ];
  
  return NextResponse.json(products);
}