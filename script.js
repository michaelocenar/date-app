function findNextDate(currentDate, targetDayNumber, targetWeekday, targetMonth) {
  targetDayNumber = targetDayNumber ? parseInt(targetDayNumber) : undefined;
  targetWeekday = targetWeekday ? parseInt(targetWeekday) : undefined;
  targetMonth = targetMonth !== undefined ? parseInt(targetMonth) : undefined;

  const maxAttempts = 365 * 10;  // a maximum of 10 years
  for (let i = 0; i < maxAttempts; i++) {
      currentDate.setDate(currentDate.getDate() + 1);

      const isDayMatch = !targetDayNumber || currentDate.getDate() === targetDayNumber;
      const isWeekdayMatch = targetWeekday === undefined || currentDate.getDay() === targetWeekday;
      const isMonthMatch = targetMonth === undefined || currentDate.getMonth() === targetMonth;

      if (isDayMatch && isWeekdayMatch && isMonthMatch) {
          return currentDate;  // if all conditions are met, return the date
      }
  }

  // If no date matches the criteria in the next 10 years, then return null
  return null;
}
function findDate() {
const dayNumberInput = document.getElementById("dayNumber").value;
const weekdayInput = document.getElementById("weekday").value;
const monthInput = document.getElementById("month").value;

const resultDate = findNextDate(new Date(), dayNumberInput, weekdayInput, monthInput);

if (resultDate) {
    const formattedResult = formatDate(resultDate);
    document.getElementById("result").innerText = "Next Date: " + formattedResult;
} else {
    document.getElementById("result").innerText = "No matching date found in the next 10 years.";
}
}


function formatDate(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}