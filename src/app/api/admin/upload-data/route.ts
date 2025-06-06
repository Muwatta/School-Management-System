import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import Papa from "papaparse";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const type = formData.get("type") as string;

  if (!file || !type) {
    return NextResponse.json({ message: "Missing file or type" }, { status: 400 });
  }

  const text = await file.text();
  const parsed = Papa.parse(text, { header: true });
  const data = parsed.data;

  // Save to a JSON file (for demo; use DB for production)
  const filePath = path.join(process.cwd(), "public", "data", `${type}.json`);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ message: "Upload successful" });
}