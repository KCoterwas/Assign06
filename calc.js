var output = document.getElementById('result');
  
var triangular = function(wholeNumber) {
    var base = 0;
    var addedNumber = 1;
    for ( var counter = 0; counter < wholeNumber; counter++){
        base += addedNumber;
        addedNumber++;
    }
    return base;
};

var fibonacci = function(fibNumLocation) {
    var fibPrevPrev = 0;
    var fibPrev = 1;
    var fibNew = 0;
    if (fibNumLocation === 0) {
       return 0;
    } else if (fibNumLocation === 1) {
       return 1;
    } else {
       for (var counter = 0; counter < fibNumLocation; counter++) {
           fibNew = fibPrevPrev + fibPrev;
           fibPrevPrev = fibPrev;
           fibPrev = fibNew;
       }
    }
return fibNew;
};

var readNumbers = function() {
     var inputBox = document.getElementById('input');
     var input = inputBox.value;
	 var number = parseInt(input);
	 return number;
}

var run = function() {
    var n = readNumbers();
	var t = triangular(n);
	var f = fibonacci(n);
	output.innerHTML = "The triangular number is " + t + " and the Fibonacci number is " + f + ".";
}
var button = document.getElementById('runner');
button.onclick = run;