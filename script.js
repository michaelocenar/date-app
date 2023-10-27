function findDate() {
  const dayNumberInput = document.getElementById("dayNumber").value;
  const weekdayInput = document.getElementById("weekday").value;
  const monthInput = document.getElementById("month").value;

  const resultDate = findNextDate(new Date(), dayNumberInput, weekdayInput, monthInput);
  if (resultDate) {
      const formattedResult = formatDate(resultDate);
      document.getElementById("result").innerText = "Next Date: " + formattedResult;
  } else {
      document.getElementById("result").innerText = "No valid date found.";
  }
}

function findNextDate(currentDate, targetDayNumber, targetWeekday, targetMonth) {
  targetDayNumber = (targetDayNumber !== "") ? parseInt(targetDayNumber) : null;
  targetWeekday = targetWeekday !== "" ? parseInt(targetWeekday) : null;
  targetMonth = targetMonth !== "" ? parseInt(targetMonth) : null;

  let counter = 0;
  const maxIterations = 366;  // Maximum number of days to check (covers an entire year)
  do {
      currentDate.setDate(currentDate.getDate() + 1);
      counter++;
  } while (
      (counter <= maxIterations) && 
      ((targetDayNumber !== null && currentDate.getDate() !== targetDayNumber) ||
      (targetWeekday !== null && currentDate.getDay() !== targetWeekday) ||
      (targetMonth !== null && currentDate.getMonth() !== targetMonth))
  );

  if (counter > maxIterations) {
      return null; // No valid date found
  }

  return currentDate;
}

function formatDate(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
