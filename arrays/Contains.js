function contains(x, array){
	for(var i=0 ; i<array.length; i++){
		if(array[i] == x){
			return true;
		}
	}

	return false;
}

contains(1, [0,3,4,5,6,1,10]);
//works!!