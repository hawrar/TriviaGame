// Counter set at 60 senonds
var count = 60;


// variables for holding correct, wrong, and nonanswers
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;




$(document).ready(function(){



	// mid container Divs
	$("#mid_game_container").hide();
	$("#end_container").hide();


	window.scrollTo(0, 500);


	$("#start_button").on("click", function(){

		// hiding the start div
		$("#start_container").hide();


		// this is the game div
		$("#mid_game_container").show();

		startCountdown();
		return;

	});

	// function to count the user time
	function countdown(){

		// starting point down
		count--;

		// showing the time left
    	$('#timer_number').html(count + " Seconds");

    
			// when user finishes
			$("#done_button").on("click", function(){

			
			count = 0; 
			return;

			});

			// When the game is up on its own
			if(count == -1){

				// calculating the user answers
				timeUp();

				// Game over and user needs to refresh the page to restart
				$("#mid_game_container").hide();

			}


	}


	// countdown function
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// function for calculationg the results
	function timeUp(){


		// button values chedked
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();



		//  checking the answers 
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Australia"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Bolivia"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "40%"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "peanuts"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "peanuts"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Brazil nut"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "almonds"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "pistachios"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "peanuts"){
			correctCount++;
		}
		else{
			wrongCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "almond"){
			correctCount++;
		}
		else{
			wrongCount++;
		}




		// results shown to the player
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// final display
		$("#end_container").show();


		
		window.scrollTo(0, 550);

	}

});
