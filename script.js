document.addEventListener("DOMContentLoaded", function(event) {
    // Get the current week number
    var today = new Date();
    var weekNumber = getWeekNumber(today);

    // Determine the values based on the week number
    var values = ["K.D.", "M.M.", "A.W."];
    var valuesForShift = ["A.W.", "M.M.","K,D."];
	var valuesForHeroku = ["M.S","M.M","K.D","A.W"];
	//for services
	var valuesToCreateServices = ["K.D","A.W"];
    var index = (weekNumber - 25) % values.length;
    if (index < 0) {
        index += values.length;
    }
	var indexNext = (weekNumber - 24) % values.length;
		if (indexNext < 0) {
		indexNext += values.length;
	}
	//shorter one for services
	var indexServ = (weekNumber - 25) % valuesToCreateServices.length;
		if(indexServ < 0){
			indexServ += valuesToCreateServices.length;
		}
	//longer for HerokuValue
	var indexHeroku = (weekNumber - 25) % valuesForHeroku.length;
		if(indexHeroku < 0){
			indexHeroku += valuesForHeroku.length;
		}
	var indexHerokuNext = (weekNumber - 24) % valuesForHeroku.length;
		if (indexHerokuNext < 0) {
		indexHerokuNext += valuesForHeroku.length;
		}
    var currentValue = values[index];
	var currentValueNext = values[indexNext];
    var shiftValue = valuesForShift[index];
	var shiftValueNext = valuesForShift[indexNext];
	var ServValue = valuesToCreateServices[indexServ];
	var HerokuValue = valuesForHeroku[indexHeroku];
	var HerokuValueNext = valuesForHeroku[indexHerokuNext];

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
