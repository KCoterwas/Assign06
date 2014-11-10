
var TimesTable = function(n) {
    var products = [];
           var numInput = parseInt(n);
           for (var i = 0; i <= 10; i++){
                var prod = i * numInput;
                products[i] = prod;
           }
    return products;
};

var readNumbers = function() {
     var inputBox = document.getElementById('input');
     var input = inputBox.value;
	 var number = parseInt(input);
	 return number;
}

var run = function() {
    var n = readNumbers();
	var t = TimesTable(n);
	var table = document.createElement('table');
	for ( var i = 0; i <= 10; i++){
		var tableRow = document.createElement('tr');
		var c1 = document.createElement('td');
		c1.textContent = n;
		tableRow.appendChild(c1);
		var c2 = document.createElement('td');
		c2.textContent = "x";
		tableRow.appendChild(c2);
		var c3 = document.createElement('td');
		c3.textContent = i;
		tableRow.appendChild(c3);
		var c4 = document.createElement('td');
		c4.textContent = "=";
		tableRow.appendChild(c4);
		var c5 = document.createElement('td');
		c5.textContent = t[i];
		tableRow.appendChild(c5);
		table.appendChild(tableRow);
	}
	document.body.appendChild(table);
}
var button = document.getElementById('runner');
button.onclick = run;
