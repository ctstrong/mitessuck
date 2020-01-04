// TO DO: Produce form for mite treatment inputs for researchers
// TO DO: Find researchers
// TO DO: Add treatments from completed forms
// TO DO: Print accepted treatments to the DOM
// TO DO: Add time marker/version stamp to DOM
// TO DO: Get min/max temps from weather api based on zip code
// TO DO: Styling/appearance
// TO DO: Add seasonality logic
// TO DO: Add additional treatment options as objects to array
// TO DO: Add additional information to treatment options: description, instructions, video link,...
// TO DO: Discuss, is there a more efficient way to get inputs from checkboxes and radio buttons?
// QUESTION: Do we need to take any other variable, like season, into account?
// Answer:  Yes. THe HBC app does this by asking if the colony is increasing, decreasing, stable or in cluster. 
// TO DO: Get values for variables from input form and weather API
// TO DO: Move mite treatments to database. This may require a lot of discussion on the reasoning for it

let miteCount300 = 10;		//number of mites per 300 adult bees (1/2 cup)


let minTemp = 60;       	//minimum temperature in degree Fahrenheit in 3-day weather forecast
let maxTemp = 65;			//maximum temperature in degree Fahrenheit in 3-day weather forecast



// Treatments are selected based on the following conditions:

if 	(supersInput = "supersYes" || broodInput = "broodYes" || syntheticInput = "syntheticYes" || increasingInput = "increasingYes" || decreasingInput = "decreasingYes" || peakInput = "peakNo" || dormantInput = "dormantNo") {
	
	let treatmentOptionA = "Aprivar";
	
	if (temp >= minTemp) {
		
		let treatmentOptionB = "Apistan"
	}
	
}


else if (supersInput = "supersNo" || broodInput = "broodNo" || syntheticInput = "syntheticNo" || increasingInput = "increasingNo" decreasingInput = "decreasingYes" || peakInput = "peakNo" || dormantInput = "dormantYes" ) {
	
	let treatmentOptionA = "Oxalic (AP-Bioxal) (Dribble)";
	let treatmentOptionB = "Oxalic (AP-Bioxal) (Vaporization)";
	let treatmentOptionC = "Oxalic (AP-Bioxal) (Spray Package Bees)";
	
} 


else if (supersInput = "supersYes" || broodInput = "broodYes" || syntheticInput = "syntheticNo" || increasingInput = "increasingYes" || decreasingInput = "decreasingYes"|| peakInput = "peakYes" || dormantInput = "dormantNo" || temp >= minTemp || temp <= maxTemp) {
	
	let treatmentOptionA = "Mite-Away Quick Strips";
	let treatmentOptionB = "FormicPro";
	
} 




// Treatments are selected based on the following conditions:

function checkOptions(option) {
	let flag = false
	// check for minimum temperature
 	if ((option.minTemp == "none") || (option.minTemp <= minTemp)) {
 		// check for maximum temperature
 		if ((option.maxTemp == "none") || (option.maxTemp >= maxTemp)) {
 			// check for honey supers
 			if (honeySupers ? option.honeySupers : true) {
 				// check for brood
 				if (brood ? option.brood : true) {
 					// check for Synthetic treatment
 					if (nonSynthetic ? true : option.Synthetic) {
 						flag = true
 					}
 				}
 			}
 		}
 	}
	return flag
} 

// The treatment options selected based on the user input are:

let treatmentSelection = treatmentOptions.filter(checkOptions)
//console.log(treatmentSelection)

//Retrieve values on form submit

function formSubmit(){
	var input = {
		miteCount300: document.getElementById("loadInput").value,
		zip: document.getElementById("zipInput").value,
		season: "increasing",
		supers: false, 
 		brood: false,
 		synthetic: false
 	};
 	//loop through radio button to get correct value

 	if (document.getElementById("dormant").checked)
 		{input.season="dormant"}
 	else if (document.getElementById("peak").checked)
 		{input.season="peak"}
	else if (document.getElementById("decreasing").checked)
		{input.season="decreasing"}
	
 	if (document.getElementById("supersInput").checked)
 		{input.supers = true};
 	if (document.getElementById("broodInput").checked)
 		{input.brood = true};
 	if (document.getElementById("syntheticInput").checked)
 		{input.synthetic = true};
 	console.log(input);
 	document.getElementById("name").innerHTML = treatmentOptions[0].name;
 }

 //function displayTreatments(){
 //	document.getElementById("name").innerHTML = treatmentOptions[0].name;

 //}





