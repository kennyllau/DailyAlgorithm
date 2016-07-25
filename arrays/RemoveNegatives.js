function removeAt(index, arr){
	for(var i= index; i < arr.length-1; i++){
		var temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	arr.pop();
	return arr;
}

function removeNegatives(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i]< 0){
			removeAt(i, arr);
            i--;
		}
	}
	return arr;
}

console.log(removeNegatives([-1,-1,-2,-2,4,5,3,2,-1]));
//works!!

