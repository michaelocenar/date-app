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

  let currentYear = parseInt(year);
  let nextEasterBeforeAnnunciation;
  do {
      currentYear++;
      nextEasterBeforeAnnunciation = calculateEaster(currentYear);
  } while (nextEasterBeforeAnnunciation >= new Date(currentYear, 2, 25));

  document.getElementById("nextBeforeAnnunciation").innerText = `The next Easter before the Annunciation will be on ${nextEasterBeforeAnnunciation.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} in the year ${currentYear}.`;
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
