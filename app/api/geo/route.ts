import { callingCodeForIso, countryNameForIso } from "@/lib/calling-codes";
import { headers } from "next/headers";

export async function GET() {
  const requestHeaders = await headers();
  const iso = (requestHeaders.get("x-vercel-ip-country") ?? "").toUpperCase();
  const rawCity = requestHeaders.get("x-vercel-ip-city") ?? "";
  let city = "";
  try {
    city = decodeURIComponent(rawCity.replace(/\+/g, " "));
  } catch {
    city = rawCity;
  }

  return Response.json({
    country: iso,
    countryName: countryNameForIso(iso),
    city,
    callingCode: callingCodeForIso(iso || undefined),
  });
}
