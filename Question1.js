//Question1_Calculate the total annual income of the person from the following text.
//‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const salaryPerMonth = 5000;
const annualBonus = 10000;
const onlineCoursesPerMonth = 5500;

// Calculate monthly income from salary and online courses
const monthlyIncome = salaryPerMonth + onlineCoursesPerMonth;

// Calculate annual income from salary and online courses
const annualIncome = monthlyIncome * 12;

// Add the annual bonus to get the total annual income
const totalAnnualIncome = annualIncome + annualBonus;

console.log("Total Annual Income: " + totalAnnualIncome + " euro");
