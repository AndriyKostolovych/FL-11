function addOne(x) {
	return x + 1;
}

function pipe(x){
	var result=x;
	for(var i=1; i<arguments.length; i++){
		result=arguments[i](result);
	}
return result;
}
 
pipe(1, addOne, addOne); 
