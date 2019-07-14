function reverseNumber(a) {
var strNum=""+a;

	if(a===0){
		return 0;
	}else if(a>0){
		var revStrNumb="";
		for(var i=strNum.length-1; i>=0; i--){
			revStrNumb=revStrNumb+strNum[i];
			}
	}else{
		revStrNumb="-";
		for(i=strNum.length-1; i>=0; i--){
			revStrNumb=revStrNumb+strNum[i];
			}
	}
return parseInt(revStrNumb);
}

reverseNumber(321);