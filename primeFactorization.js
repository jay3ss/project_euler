var NUMBER = 100;
var j = 2;

var isPrime = function (num) {
	var is_prime = true;
	var i = 2;
	while(i < num) {
		if (num % i === 0) {
			is_prime = false;
			i++;
		}
	}
	return is_prime;
};

var isFactor = function (num, factor) {
	if (num % factor === 0) {
		return true;
	} else {
		return false;
	}
};

//not going to use it

var largestPrimeFactor = function (num) {
	var i = 2;
	var factor = 0;
	while (i < num) {
		if (isFactor(num, i) && isPrime(i)) {
			factor = i;
		}
		i++;
	}
	return factor;
};

for (var i = 2; i < NUMBER; i++) {
	if (isFactor(NUMBER, i) && isPrime(i)) {
		j = i;
	}
}

console.log(j);