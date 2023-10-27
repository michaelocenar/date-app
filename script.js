function findDate() {
  const dayNumberInput = document.getElementById("dayNumber").value;
  const weekdayInput = document.getElementById("weekday").value;
  const monthInput = document.getElementById("month").value;

  const result = findNextDate(new Date(), dayNumberInput, weekdayInput, monthInput);
  document.getElementById("result").innerText = "Next Date: " + result;
}

function findNextDate(currentDate, targetDayNumber, targetWeekday, targetMonth) {
  targetDayNumber = targetDayNumber ? parseInt(targetDayNumber) : undefined;
  targetWeekday = targetWeekday ? parseInt(targetWeekday) : undefined;
  targetMonth = targetMonth !== undefined ? parseInt(targetMonth) : undefined;

  do {
      currentDate.setDate(currentDate.getDate() + 1);
  } while (
      (targetDayNumber && currentDate.getDate() !== targetDayNumber) ||
      (targetWeekday !== undefined && currentDate.getDay() !== targetWeekday) ||
      (targetMonth !== undefined && currentDate.getMonth() !== targetMonth)
  );

  return currentDate;
}

function formatDate(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
