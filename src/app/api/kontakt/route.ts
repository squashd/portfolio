import { NextRequest, NextResponse } from "next/server";

export async function Post(req: NextRequest) {
  const API_URL = "https://api.web3forms.com/submit";
  const API_KEY = "45efe42b-7277-496d-820d-16ed6151abff";
  const body = await req.text();
  const response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      access_key: API_KEY,
      ...JSON.parse(body),
    }),
  });
  const json = await response.json();
  if (json.success) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false });
}
