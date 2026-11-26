import { countryNameForIso } from "@/lib/calling-codes";
import {
  calendarDateInZone,
  formatInTimeZone,
  timezoneLabel,
  zonedLocalToUtc,
} from "@/lib/demo-time";

/*
  Google Apps Script (deploy as web app, anyone with the link).
  Bind the script to the "tutorparks demos" spreadsheet, then paste
  the web-app URL into GOOGLE_SHEET_URL.

  The spreadsheet FILE name is not a tab name. This looks up the tab
  case-insensitively and creates "tutorparks demos" if it is missing
  (a new workbook's first tab is usually still "Sheet1").

  function doPost(e) {
    const TAB = "tutorparks demos";
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet =
      ss.getSheets().find(function (s) {
        return s.getName().trim().toLowerCase() === TAB;
      }) || ss.insertSheet(TAB);
    const data = JSON.parse(e.postData.contents);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(data.headers);
    }
    sheet.appendRow(data.values);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }
*/

const SHEET_HEADERS = [
  "submitted_at",
  "grade",
  "subject",
  "parent_name",
  "parent_email",
  "calling_code",
  "mobile",
  "country",
  "city",
  "local_date",
  "local_time",
  "timezone",
  "india_demo_date",
] as const;

type DemoBody = {
  grade?: string;
  subject?: string;
  parentName?: string;
  parentEmail?: string;
  callingCode?: string;
  mobile?: string;
  localDateTime?: string;
  timeZone?: string;
  country?: string;
  city?: string;
};

export async function POST(request: Request) {
  let body: DemoBody;
  try {
    body = (await request.json()) as DemoBody;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const grade = body.grade?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const parentName = body.parentName?.trim() ?? "";
  const parentEmail = body.parentEmail?.trim() ?? "";
  const callingCode = body.callingCode?.trim() ?? "";
  const mobile = body.mobile?.trim() ?? "";
  const localDateTime = body.localDateTime?.trim() ?? "";
  const timeZone = body.timeZone?.trim() || "UTC";
  const country = (body.country ?? "").toUpperCase();
  const city = body.city?.trim() ?? "";

  if (
    !grade ||
    !subject ||
    !parentName ||
    !parentEmail ||
    !callingCode ||
    !mobile ||
    !localDateTime
  ) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  let instant: Date;
  try {
    instant = zonedLocalToUtc(localDateTime, timeZone);
  } catch {
    return Response.json({ error: "Invalid date and time" }, { status: 400 });
  }

  const selectedDate = localDateTime.slice(0, 10);
  const todayInZone = calendarDateInZone(new Date(), timeZone);
  if (selectedDate <= todayInZone) {
    return Response.json(
      { error: "Please choose a time from tomorrow onward" },
      { status: 400 },
    );
  }

  const local = formatInTimeZone(instant, timeZone);
  const india = formatInTimeZone(instant, "Asia/Kolkata");
  const indiaDemoDate = `${india.date} ${india.time}`;
  const countryName = countryNameForIso(country);
  const timezone = timezoneLabel(countryName, timeZone, instant);

  const fields = {
    submitted_at: new Date().toISOString(),
    grade,
    subject,
    parent_name: parentName,
    parent_email: parentEmail,
    calling_code: callingCode,
    mobile,
    country,
    city,
    local_date: local.date,
    local_time: local.time,
    timezone,
    india_demo_date: indiaDemoDate,
  };

  const payload = {
    headers: [...SHEET_HEADERS],
    values: SHEET_HEADERS.map((key) => fields[key]),
    fields,
  };

  const sheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!sheetUrl) {
    console.warn("GOOGLE_SHEET_URL is not set; demo booking was not written to a sheet.");
  } else {
    try {
      const sheetResult = await postBookingToSheet(sheetUrl, payload);
      if (!sheetResult.ok) {
        console.error("Google Sheet webhook failed", sheetResult.error);
        return Response.json({ error: sheetResult.error }, { status: 502 });
      }
    } catch (error) {
      console.error("Google Sheet webhook error", error);
      return Response.json(
        { error: "Could not save booking to the sheet. Please try again." },
        { status: 502 },
      );
    }
  }

  return Response.json({
    ok: true,
    local_date: local.date,
    local_time: local.time,
    timezone,
    india_demo_date: indiaDemoDate,
  });
}

function appsScriptErrorMessage(body: string): string {
  const match = body.match(/Error:\s*([^<\n]+)/i);
  if (match?.[1]) return match[1].trim();
  if (/<!DOCTYPE html|<html/i.test(body)) {
    return "Could not save booking to the sheet.";
  }
  return body.trim().slice(0, 200) || "Could not save booking to the sheet.";
}

async function postBookingToSheet(url: string, payload: unknown) {
  // text/plain: Apps Script reads e.postData.contents; JSON content-type
  // is more likely to be wrapped in a Google HTML error page.
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  try {
    const parsed = JSON.parse(text) as { ok?: boolean };
    if (parsed.ok) return { ok: true as const };
  } catch {
    /* Apps Script returns HTML when doPost throws */
  }
  return { ok: false as const, error: appsScriptErrorMessage(text) };
}
