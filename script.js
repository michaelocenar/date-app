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

function findFurthestDate() {
  const currentDate = new Date();
  let furthestDate = new Date(currentDate);
  let maxDifference = 0;
  let bestCombination = {};

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= 31; day++) {
          for (let weekday = 0; weekday < 7; weekday++) {
              const nextDate = findNextDate(new Date(currentDate), day, weekday, month);
              const difference = (nextDate - currentDate) / (1000 * 60 * 60 * 24);

              if (difference > maxDifference) {
                  maxDifference = difference;
                  furthestDate = new Date(nextDate);
                  bestCombination = {
                      month: monthNames[month],
                      day: day,
                      weekday: dayNames[weekday]
                  };
              }
          }
      }
  }

  document.getElementById("result").innerText = `Furthest Date: ${formatDate(furthestDate)} (Combination: ${bestCombination.month} ${bestCombination.day}, ${bestCombination.weekday})`;
}