function pushfront(value, arr){
    arr[arr.length] = value;
	for(var i= arr.length-1; i>0; i--){
		var temp = arr[i];
		arr[i] = arr[i-1];
		arr[i-1] = temp;
	}
	return arr;
}

pushfront([1,2,3,4,5], 9);
//works!!