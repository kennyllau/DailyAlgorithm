function popFront(arr){
	var temp = 0;
	for(var i=0; i<arr.length-1; i++){
		temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	arr.pop();
	return arr;
}

console.log(popFront([1,1,2,3,4,5]));
//works!!