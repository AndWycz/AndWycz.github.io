document.addEventListener("DOMContentLoaded", function(event) {
    // Get the current week number
    var today = new Date();
    var weekNumber = getWeekNumber(today);

    // Determine the values based on the week number
    var values = ["K.D.", "M.M.", "A.W."];
    var valuesForShift = ["A.W.", "M.M.","K.D."];
    var valuesForHeroku = ["M.M","K.D","A.W"];
    var valuesToCreateServices = ["K.D","A.W"];
    
    var index = Math.abs((weekNumber - 26) % values.length); // Adjusted to make currentValue "M.M."
    var indexNext = (index + 1) % values.length; // Next index

    var currentValue = values[index];
    var currentValueNext = values[indexNext];
    var shiftValue = valuesForShift[index];
    var shiftValueNext = valuesForShift[indexNext];
    var ServValue = valuesToCreateServices[index % valuesToCreateServices.length];
    var HerokuValue = valuesForHeroku[index];
    var HerokuValueNext = valuesForHeroku[indexNext];

    // Update the displayed values
    var currentValueElement = document.getElementById("currentValue");
    var currentValueNextElement = document.getElementById("currentValueNext");
    var shiftValueElement = document.getElementById("shiftValue");
    var shiftValueElementNext = document.getElementById("shiftValueNext");
    var servValueElement = document.getElementById("ServValue");
    var HerokuValueElement = document.getElementById("HerokuValue");
    var HerokuValueNextElement = document.getElementById("HerokuValueNext");
    currentValueElement.textContent = currentValue;
    currentValueNextElement.textContent = currentValueNext;
    shiftValueElement.textContent = shiftValue;
    shiftValueElementNext.textContent = shiftValueNext;
    servValueElement.textContent = ServValue;
    HerokuValueElement.textContent = HerokuValue;
    HerokuValueNextElement.textContent = HerokuValueNext;
});

// Function to calculate the ISO week number
function getWeekNumber(date) {
    var target = new Date(date.valueOf());
    var dayNumber = (date.getUTCDay() + 6) % 7;
    target.setUTCDate(target.getUTCDate() - dayNumber + 3);
    var firstThursday = target.valueOf();
    target.setUTCMonth(0, 1);
    if (target.getUTCDay() !== 4) {
        target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
}