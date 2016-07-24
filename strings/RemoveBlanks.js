function removeBlanks(str){
    var word = '';
	for(var i=0; i< str.length; i++){   
	  if(str[i] == " "){
        continue;
      }else{
        word += str[i];
      }	
	}
	return word;
}


removeBlanks("i like to eat       asd");
// works!!