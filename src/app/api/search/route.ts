import { NextRequest, NextResponse } from "next/server";
import { searchContent } from "@/lib/search";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get("q");
  if (!q || q.trim().length < 2) {
    return NextResponse.json({ results: [] }, { status: 400 });
  }
  try {
    const results = await searchContent(q.trim(), 20);
    return NextResponse.json({ results }, {
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    });
  } catch (e) {
    console.error("Search error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}