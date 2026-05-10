export function formatCountdown(targetDate: Date) {
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds, expired: diff === 0 };
}

export function sanitizeDate(date: string, time: string, timezoneOffset = '+07:00') {
  return new Date(`${date}T${time}${timezoneOffset}`);
}
