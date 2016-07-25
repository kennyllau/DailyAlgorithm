function contains(x, array){
	for(var i=0 ; i<array.length; i++){
		if(array[i] == x){
			return true;
		}
	}

	return false;
}

function removeAt(index, array){
	for(var i= index; i < arr.length-1; i++){
		var temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	arr.pop();
	return arr;
}


function removeDups(array){
	var array2 = [];

	for(var i=0; i<=array.length; i++){
		if(contains(array[i], array2)){
		  removeAt(i, array);
          i--;
		}
		  array2.push(array[i]);
		
	}

	return array;
}

	console.log(removeDups([1,1,1,1,1,1,2,3,4,5,4,5,6,7,8,1,3,4,1]));
	//works!!