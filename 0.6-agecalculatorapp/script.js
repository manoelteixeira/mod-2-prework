let userInput = document.getElementById("date");
// restrict dates to only current and past
userInput.max = new Date().toISOString().split("T")[0];

function getDateObj(date) {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateAge() {
  let birthDate = getDateObj(new Date(userInput.value));
  let today = getDateObj(new Date());
  let result = document.getElementById("result");

  let dayDif;
  let monthDif;
  let yearDif = today.year - birthDate.year;

  if (today.month >= birthDate.month) {
    monthDif = today.day - birthDate.day;
  } else {
    yearDif--;
    monthDif = 12 + today.month - birthDate.month;
  }

  if (today.day >= birthDate.day) {
    dayDif = today.day - birthDate.day;
  } else {
    monthDif--;
    const daysInBirthMonth = getDaysInMonth(birthDate.year, birthDate.month);
    dayDif = daysInBirthMonth + today.day - birthDate.day;
  }

  if (monthDif < 0) {
    monthDif = 11;
    yearDif--;
  }
  const yearStr = `<span>${yearDif}</span>`;
  const monthStr = `<span>${monthDif}</span>`;
  const dayStr = `<span>${dayDif}</span>`;

  result.innerHTML = `You are ${yearStr} years, ${monthStr} months, and ${dayStr} days old.`;
}
