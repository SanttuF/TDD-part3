const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas(now=new Date()) {
  const day = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (day.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(now.getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - day.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
