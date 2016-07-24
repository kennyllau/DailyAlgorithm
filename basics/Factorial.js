function factorial(n){
	var product = 1;

	for(var i=1; i<=n; i++){
		product = product*i;
	}

	console.log(product);
	return product;
}

factorial(6);

// 1*2*3*4*5*6