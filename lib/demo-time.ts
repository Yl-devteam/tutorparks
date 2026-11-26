/** UTC offset of `timeZone` at `instant`, in hours (e.g. 5.5, 4, -5). */
export function utcOffsetHours(timeZone: string, instant: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(instant);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  const asUtc = Date.UTC(
    value("year"),
    value("month") - 1,
    value("day"),
    value("hour"),
    value("minute"),
    value("second"),
  );

  return (asUtc - instant.getTime()) / 3_600_000;
}

export function formatOffsetHours(hours: number): string {
  const rounded = Math.round(hours * 4) / 4;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

/**
 * Interpret a `datetime-local` value (`YYYY-MM-DDTHH:mm`) as wall time in
 * `timeZone` and return the corresponding UTC Date.
 */
export function zonedLocalToUtc(localDateTime: string, timeZone: string): Date {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(localDateTime);
  if (!match) {
    throw new Error("Invalid local datetime");
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0);
  let instant = new Date(
    utcGuess - utcOffsetHours(timeZone, new Date(utcGuess)) * 3_600_000,
  );
  instant = new Date(
    utcGuess - utcOffsetHours(timeZone, instant) * 3_600_000,
  );
  return instant;
}

export function formatInTimeZone(
  instant: Date,
  timeZone: string,
): { date: string; time: string } {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(instant);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    date: `${value("year")}-${value("month")}-${value("day")}`,
    time: `${value("hour")}:${value("minute")}`,
  };
}

export function calendarDateInZone(instant: Date, timeZone: string): string {
  return formatInTimeZone(instant, timeZone).date;
}

export function timezoneLabel(
  countryName: string,
  timeZone: string,
  instant: Date,
): string {
  const offset = formatOffsetHours(utcOffsetHours(timeZone, instant));
  const region = countryName.trim() || timeZone.split("/")[1]?.replaceAll("_", " ") || timeZone;
  return `${region} ${offset}`;
}
