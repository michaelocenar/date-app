function findDate() {
  const dayNumberInput = document.getElementById("dayNumber").value;
  const weekdayInput = document.getElementById("weekday").value;
  const monthInput = document.getElementById("month").value;

  const resultDate = findNextDate(new Date(), dayNumberInput, weekdayInput, monthInput);
  const formattedResult = formatDate(resultDate);
  document.getElementById("result").innerText = "Next Date: " + formattedResult;
}

function findNextDate(currentDate, targetDayNumber, targetWeekday, targetMonth) {
  targetDayNumber = targetDayNumber ? parseInt(targetDayNumber) : undefined;
  targetWeekday = targetWeekday ? parseInt(targetWeekday) : undefined;
  targetMonth = targetMonth !== undefined ? parseInt(targetMonth) : undefined;

  while (true) {  // keep searching until we find a match
      currentDate.setDate(currentDate.getDate() + 1);

      // Check if current date matches all conditions
      const isDayMatch = !targetDayNumber || currentDate.getDate() === targetDayNumber;
      const isWeekdayMatch = targetWeekday === undefined || currentDate.getDay() === targetWeekday;
      const isMonthMatch = targetMonth === undefined || currentDate.getMonth() === targetMonth;

      if (isDayMatch && isWeekdayMatch && isMonthMatch) {
          break;  // if all conditions are met, exit the loop
      }
  }

  return currentDate;
}


function formatDate(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}