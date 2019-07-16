// Your code goes here
//Task 0
function getNumbers(a) {
  let str = a, arr = [];

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseFloat(str[i]))) {
      arr.push(parseInt(str[i]));
    }
  }
  return arr;
}

//Task 1
function findTypes(){
	let numb = 0;
	let str = 0;
	let bool = 0;
	let obj = 0;
	let undef = 0;
	let symb = 0;
	let objType ={};

	for(let i = 0; i < arguments.length; i++){
		if(typeof arguments[i] === 'number'){
			numb++;
			objType.number = numb;
		}else if(typeof arguments[i] === 'string'){
			str++;
			objType.string = str;
		}else if(typeof arguments[i] === 'boolean'){
			bool++;
			objType.boolean = bool;
		}else if(typeof arguments[i] === 'object'){
			obj++;
			objType.object = obj;
		}else if(typeof arguments[i] === 'function'){
			obj++;
			objType.object = obj;
		}else if(typeof arguments[i] === 'undefined'){
			undef++
			objType.undefined = undef;
		}else if(typeof arguments[i] === 'symbol'){
			symb++;
			objType.symbol = symb;
		}
	}
	return objType;
}

//Task 2
function executeforEach(arr, callback){
	for(let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
	}
}

//Task 3
function mapArray(arr, callback) {
	let mapArr = [];
	
  executeforEach(arr, function(e, i, arr) {
    mapArr.push(callback(e, i, arr));
  });
  return mapArr;
}

//Task 4
function filterArray(arr, callback) {
	let newArray = [];
	
  executeforEach(arr, function(e, i, arr) {
    if (callback(e, i, arr)){
      newArray.push(e);
    } 
  });
  return newArray;
}

//Task 5
function showFormattedDate(date) {
  let month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];
	
  return (
    'Date: ' +
    month[date.getMonth()] +
    ' ' +
    date.getDate() +
    ' ' +
    date.getFullYear()
  );
}

//Task 6
function canConvertToDate(d) {
  let date = new Date(d);
  if (
    isNaN(date.getMonth()) &&
    isNaN(date.getDate()) &&
    isNaN(date.getFullYear())
  ) {
    return false;
  } else {
    return true;
  }
}

//Task 7
function daysBetween(d1, d2) {
  let dif;
  let ms = 1000;
  let minInHour = 60;
  let secInMin = 60;
  let hourInDay = 24;
  let dateOne = d1.getTime();
  let dateTwo = d2.getTime();

  let ofset = (d1.getTimezoneOffset() - d2.getTimezoneOffset()) * minInHour * ms;

  dif = Math.abs(dateOne - ofset - dateTwo) / (ms * secInMin * minInHour * hourInDay);
  return dif;
}

//Task 8
function getAmountOfAdultPeople(data) {
	let date = new Date();
  let adultYear = 18;
	date.setFullYear(date.getFullYear() -adultYear);

	return data.filter(function(e) {
        if (date > new Date(e[' birthday ']) && daysBetween(date, new Date(e[' birthday '])) > 0) {
            return true;
        }
        return false;
	}).length
}

//Task 9
function keys(obj) {
	let arr = [];
	
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

//Task 10
function values(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}
