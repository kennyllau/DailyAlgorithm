function secondToLast(arr){
	if(arr.length < 2){
		return "array is too short";
	}
	return arr[arr.length-2];
}

console.log(secondToLast([2,1,2,3,4,5,]));
//works!!