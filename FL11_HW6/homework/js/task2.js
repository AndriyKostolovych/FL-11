// Your code goes here
		let a=parseFloat(prompt('enter a'));
		let b=parseFloat(prompt('enter b'));
		let c=parseFloat(prompt('enter c'));
 if (a+b>c && a+c>b && b+c>a && a>0 && b>0 && c>0){
	if(a===b && b===c){
		console.log('Eequivalent triangle');
	}else if(a===b || b===c ||a===c){
		console.log('Isosceles triangle');
	}else{
		console.log('Normal triangle');	
	}	
}else{
	console.log('Triangle doesn’t exist');
	}
