document.addEventListener('DOMContentLoaded', function () {
    // Problem 1
    const birthdate = moment("1999-11-13");
    const currentDate = moment();
    const daysDifference = currentDate.diff(birthdate, 'days');
    document.getElementById('problem1').innerText = `1. Days between birthdate and current date: ${daysDifference} days`;

    // Problem 2
    const duration = moment.duration(currentDate.diff(birthdate));
    const years = duration.years();
    const months = duration.months();
    const remainingDays = duration.days();
    document.getElementById('problem2').innerText = `2. ${years} years, ${months} months, and ${remainingDays} days since birthdate`;

    // Problem 3
    const date1 = moment("2023-02-01");
    const date2 = moment("2023-03-15");
    const closestDate = moment.min(date1, date2);
    document.getElementById('problem3').innerText = `3. Closest date to the current date: ${closestDate.format('YYYY-MM-DD')}`;

    // Problem 4
    const isBefore = date1.isBefore(date2);
    const comparisonResult = isBefore ? 'before' : 'after';
    document.getElementById('problem4').innerText = `4. Date 1 is ${comparisonResult} Date 2`;

    // Problem 5
    const darwinTime = moment().tz("Australia/Darwin").format('YYYY-MM-DD HH:mm:ss');
    document.getElementById('problem5').innerText = `5. Current time in Darwin, Australia: ${darwinTime}`;
});
