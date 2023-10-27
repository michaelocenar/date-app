function calculateEaster(year) {
  year = parseInt(year);  // Make sure the year is an integer
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return new Date(year, month - 1, day);
}

function calculateEasterDetails() {
  let year = document.getElementById("yearInput").value;

  if (year < 100) {
      year += 2000;  // Treat "19" as "2019"
  }

  const easterDate = calculateEaster(year);
  document.getElementById("easterDate").innerText = `Easter in ${year} is on: ${easterDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}`;

  const annunciationDate = new Date(year, 2, 25);
  if (easterDate < annunciationDate) {
      document.getElementById("beforeAnnunciation").innerText = `Easter is before the Annunciation of the Lord in ${year}.`;
  } else {
      document.getElementById("beforeAnnunciation").innerText = `Easter is after the Annunciation of the Lord in ${year}.`;
  }

  let currentYear = parseInt(year);
  while (calculateEaster(++currentYear).getMonth() !== 2 || calculateEaster(currentYear).getDate() !== 22) { }
  document.getElementById("nextEarliest").innerText = `The next earliest Easter will be on March 22, ${currentYear}.`;

  currentYear = parseInt(year);
  while (calculateEaster(++currentYear).getMonth() !== 3 || calculateEaster(currentYear).getDate() !== 25) { }
  document.getElementById("nextLatest").innerText = `The next latest Easter will be on April 25, ${currentYear}.`;
}

function goBackToMainPage() {
  window.location.href = "index.html";
}

function populateYearDropdown() {
  const yearDropdown = document.getElementById("yearList");
  const currentYear = new Date().getFullYear();  // Gets the current year
  const endYear = currentYear + 200;  // Example to provide the next 200 years; adjust as needed

  for (let i = currentYear; i <= endYear; i++) {
      const option = document.createElement("option");
      option.value = i;
      yearDropdown.appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  populateYearDropdown();
});
