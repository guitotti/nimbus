export function convertDateTime(
  dt: number,
  fuso: number
): { formattedDateTime: string; timeOfDay: number } {
  const unixTimeMs = dt * 1000;

  const dateUtc = new Date(unixTimeMs);
  const timezoneShiftMs = fuso * 1000;
  const localTimeMs = dateUtc.getTime() + timezoneShiftMs;
  const dateLocal = new Date(localTimeMs);

  const timeOfDay: number = dateLocal.getUTCHours();

  const day = String(dateLocal.getUTCDate()).padStart(2, "0");
  const month = String(dateLocal.getUTCMonth() + 1).padStart(2, "0");
  const year = dateLocal.getUTCFullYear();
  const hour = String(timeOfDay).padStart(2, "0");
  const minute = String(dateLocal.getUTCMinutes()).padStart(2, "0");
  const second = String(dateLocal.getUTCSeconds()).padStart(2, "0");

  const formattedDateTime = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

  return { formattedDateTime, timeOfDay };
}
