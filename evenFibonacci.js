var sum = 0;
var fib1 = 1;
var fib2 = 2;
var fibTot = 0;

while (fibTot < 4000000) {
	fibTot = fib1 + fib2;
	fib1 = fib2;
	fib2 = fibTot;
	if (fibTot % 2 === 0) {
		sum +=fibTot;
		console.log("Fibonacci number: " + fibTot + "Tot Total: " + sum);
	}
}