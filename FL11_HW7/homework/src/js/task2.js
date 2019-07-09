// Your code goes here
let attempt = 1;
let maxNumbOfAttempt = 3;
let basePrize = 100;
let userPrize = 0;
let prize = 0;
let range = 8;
let prizeCoef = 2;
let rengeCoef = 4;

if(confirm('Do You want to play a game?')){
	do{
	let secretNumb = Math.floor(Math.random()*range);
		for(let i = 3; i >= 1; i--){
			prize = Math.floor(basePrize / Math.pow(prizeCoef, maxNumbOfAttempt - i));
			let userAnswer = parseInt(prompt(
			'Enter a number from 0 to ' + range + '\n' +
      'Attempts left: ' + i +'\n' +
      'Total prize: ' + userPrize + '$'+ '\n' +
      'Possible prize on current attempt: ' + prize +'$'));

			if (secretNumb === userAnswer){
				userPrize = userPrize+prize;
				alert('Congratulation, you won! "\n" Your prize is: ' + prize + '$');
				basePrize = basePrize * prizeCoef;
				range = range + rengeCoef;
				break;
			}else if(i===1){
				alert('Thank you for your participation. Your prize is: ' + userPrize + '$');
				continue;
			}else{
				continue;
			}
		}
}while(confirm('Do you want to continue?'));
	alert('Thank you for your participation. Your prize is: ' + userPrize + '$');

}else{
 alert('You did not become a billionaire, but can.');
}