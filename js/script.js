{
	
const playGame = function (playerInput) {

	const clearMessages = function () { }

	const getMoveName = function (argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
		}
	}

	const displayResult = function (argComputerMove, argPlayerMove) {

		console.log('moves:', argComputerMove, argPlayerMove);
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);


		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessages('Komputer wygrywa!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
			printMessage('Mamy remis!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
			printMessage('Mamy remis!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
			printMessage('Mamy remis!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
			printMessage('Powtórz ruch gracza');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
			printMessage('Powtórz ruch gracza');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
			printMessage('Powtórz ruch gracza');
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	/*
	if(randomNumber == 1){
		computerMove = 'kamień';
	} else if(randomNumber == 2) {
		computerMove = 'papier';
	} else if(randomNumber== 3){
		computerMove = 'nożyce';
	}*/

	printMessage('Ruch komputera to: ' + computerMove);

	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	let result = displayResult(computerMove, playerMove);

	/*if(playerInput == '1'){
			playerMove = 'kamień';
	} else if(playerInput == '2') {
		playerMove = 'papier';
	} else if(playerInput == '3'){
		playerMove = 'nożyce';
	}*/

	/*printMessages('Twój ruch to: ' + playerMove);
	
	if( computerMove == 'kamień' && playerMove == 'papier'){
		printMessages('Ty wygrywasz!');
	} else if( computerMove == 'papier' && playerMove == 'nożyce'){
		printMessages('Ty wygrywasz!');
	} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
		printMessages('Ty wygrywasz!');
	} else if( computerMove == 'papier' && playerMove == 'kamień'){
		printMessages('Komputer wygrywa!');
	} else if( computerMove == 'nożyce' && playerMove == 'papier'){
		printMessages('Komputer wygrywa!');
	} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
		printMessages('Komputer wygrywa!');
	} else if( computerMove == 'papier' && playerMove == 'papier'){
		printMessages('Mamy remis!');
	} else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
		printMessages('Mamy remis!');
	} else if( computerMove == 'kamień' && playerMove == 'kamień'){
		printMessages('Mamy remis!');
	} else if( computerMove == 'kamień' && playerMove == 'nieznany ruch') {
		printMessages('Powtórz ruch gracza');
	} else if( computerMove == 'papier' && playerMove == 'nieznany ruch') {
		printMessages('Powtórz ruch gracza');
	} else if( computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
		printMessages('Powtórz ruch gracza');
	}*/
}

const chooseRock = document.getElementById('play-rock');
const choosePaper = document.getElementById('play-paper');
const chooseScissors = document.getElementById('play-scissors');

chooseRock.addEventListener('click', function () {
	playGame(1);
});

choosePaper.addEventListener('click', function () {
	playGame(2);
});

chooseScissors.addEventListener('click', function () {
	playGame(3);
});
}