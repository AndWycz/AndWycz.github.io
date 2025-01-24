document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var weekNumber = getWeekNumber(today);

    console.log("Week number:", weekNumber); 

    var values = ["M.M.", "A.W.","K.D."];
    var valuesForShift = ["K.D.", "M.M.", "A.W."];
    var valuesForHeroku = ["M.M.", "K.D.", "A.W."];
    var valuesToCreateServices = ["K.D.", "A.W."];

    if (!values.length) {
        console.error("Values array is empty or undefined.");
        return;
    }

    var index = (weekNumber + values.length) % values.length; 
    var indexNext = (index + 1) % values.length;

    console.log("Index:", index, "IndexNext:", indexNext); 

    var currentValue = values[index];
    var currentValueNext = values[indexNext];
    var shiftValue = valuesForShift[index];
    var shiftValueNext = valuesForShift[indexNext];
    var ServValue = valuesToCreateServices[index % valuesToCreateServices.length];
    var HerokuValue = valuesForHeroku[index];
    var HerokuValueNext = valuesForHeroku[indexNext];

    var currentValueElement = document.getElementById("currentValue");
    if (currentValueElement) currentValueElement.textContent = currentValue;

    var currentValueNextElement = document.getElementById("currentValueNext");
    if (currentValueNextElement) currentValueNextElement.textContent = currentValueNext;

    var shiftValueElement = document.getElementById("shiftValue");
    if (shiftValueElement) shiftValueElement.textContent = shiftValue;

    var shiftValueNextElement = document.getElementById("shiftValueNext");
    if (shiftValueNextElement) shiftValueNextElement.textContent = shiftValueNext;

    var servValueElement = document.getElementById("ServValue");
    if (servValueElement) servValueElement.textContent = ServValue;

    var herokuValueElement = document.getElementById("HerokuValue");
    if (herokuValueElement) herokuValueElement.textContent = HerokuValue;

    var herokuValueNextElement = document.getElementById("HerokuValueNext");
    if (herokuValueNextElement) herokuValueNextElement.textContent = HerokuValueNext;
});

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
