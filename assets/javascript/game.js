var randomScore = Math.floor(Math.random() * 101 + 19);
var crystal1 = Math.floor(Math.random() * 11 + 1)
var crystal2 = Math.floor(Math.random() * 11 + 1)
var crystal3 = Math.floor(Math.random() * 11 + 1)
var crystal4 = Math.floor(Math.random() * 11 + 1)
var userScore = 0;
var wins = 0;
var losses = 0;


$("#randomScore2").html(randomScore)

$("#image1").on("click", function(){
	userScore = userScore + crystal1;
	$("#playerScore2").html(userScore);
	if (userScore == randomScore) {
		win();
	} else if (userScore > randomScore) {
		loss();
	}
})

$("#image2").on("click", function(){
	userScore = userScore + crystal2;
	$("#playerScore2").html(userScore);
	if (userScore == randomScore) {
		win();
	} else if (userScore > randomScore) {
		loss();
	}
})

$("#image3").on("click", function(){
	userScore = userScore + crystal3;
	$("#playerScore2").html(userScore);
	if (userScore == randomScore) {
		win();
	} else if (userScore > randomScore) {
		loss();
	}
})

$("#image4").on("click", function(){
	userScore = userScore + crystal4;
	$("#playerScore2").html(userScore);
	if (userScore == randomScore) {
		win();
	} else if (userScore > randomScore) {
		loss();
	}
})



function reset() {
	randomScore = Math.floor(Math.random() * 101 + 19);
	userScore = 0;
	crystal1 = Math.floor(Math.random() * 11 + 1)
    crystal2 = Math.floor(Math.random() * 11 + 1)
	crystal3 = Math.floor(Math.random() * 11 + 1)
	crystal4 = Math.floor(Math.random() * 11 + 1)
	$("#randomScore2").html(randomScore)
	$("playerScore2").html(userScore)

}

function win() {
	alert("You win!");
	wins++;
	reset();
}

function loss() {
	alert("You lose!")
	losses++;
	reset();
}


