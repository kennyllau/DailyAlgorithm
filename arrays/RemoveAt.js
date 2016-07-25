function removeAt(index, arr){
	for(var i= index; i < arr.length-1; i++){
      console.log(i);
		var temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	arr.pop();
	return arr;
}

removeAt([1,2,3,4,5,6,7,8,9], 4);
//works!!
