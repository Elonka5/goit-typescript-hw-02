/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WENDSDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

function isWeekend(day: Days): boolean {
  return day === Days.SATURDAY || day === Days.SUNDAY;
}
