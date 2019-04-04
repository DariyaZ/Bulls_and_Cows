'use strict';

let number = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();

function bullsAndCows(n) {

	let num = prompt('Enter a number!');
	
	if (num === n) {
		alert (`Congrats, you guessed the number ${n}!!!
				To play again refresh the page`);
	}

	let cows = 0;
	let bulls = 0;
	let unrepetitiveCows = [];

	let userNumber =  num.split('');
	let compNumber = number.split('');

	for (let i = 0; i < userNumber.length; i++) {
		if (userNumber[i] === compNumber[i]) {
			bulls ++;	
			unrepetitiveCows.push(compNumber[i]);
		} 
		else if (userNumber.includes(compNumber[i])) {
			if (!unrepetitiveCows.includes(compNumber[i])) { 
				unrepetitiveCows.push(compNumber[i]);
				cows++;
			}
		}
	}

	let result = `BULLS: ${bulls}, COWS: ${cows}`;
		

	let paragraph = document.createElement("p");
	let tip = document.createTextNode(`You entered number ${num}, ${result}`);
	paragraph.appendChild(tip);

	let element = document.getElementById("div1");
	element.appendChild(paragraph);
		
	return num;
	
}


