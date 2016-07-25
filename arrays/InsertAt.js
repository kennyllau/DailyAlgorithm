function insertAt(index, value, arr){
  if(index > arr.length){
    return false;
  }
	arr[arr.length] = value;
	for(var i=arr.length-1; i>index; i--){
		var temp = arr[i];
		arr[i] = arr[i-1];
		arr[i-1] = temp;
	}
  return arr;
}

console.log(insertAt(4, 200, [1,2,3,4,5,6]));
//works!!