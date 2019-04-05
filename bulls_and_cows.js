'use strict';

let number = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
alert(`Введите 4 значное число с разными цифрами. Компьтер отобразит 
	результат (введённое число: сколько быков, сколько коров: бык - единица угадана на своём месте, коровы - цифры  присутствуют но не на своих местах.`);
function bullsAndCows(n) {
	alert(n);
	let num = prompt('Enter a number!');
		if (num === n) {
		document.getElementById('bla').innerHTML = 'Wow, how did you guess?';
		document.getElementById('bla').style.textAlign = 'center';
		document.getElementById('bla').style.padding = '20px';
		document.getElementById('bla').style.fontSize = '38px';

		let img = document.createElement("img");
		img.src = "images/wow.jpg";
		let src = document.getElementById('image');
 		src.appendChild(img);
 		img.style.maxWidth ="100%";
 		img.style.width ="500px";

 		var btn = document.createElement("BUTTON");  
		btn.innerHTML = "PLAY AGAIN";      
		document.body.appendChild(btn);
		btn.setAttribute("onclick", "window.location.reload()");
		document.getElementById('image').appendChild(btn);

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


