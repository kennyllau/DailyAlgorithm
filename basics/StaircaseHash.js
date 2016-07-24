function stairCase(n){
	for (var i = 1; i <= n; i++) {
	    console.log(' '.repeat(n - i) + '#'.repeat(i));
	}
}

/* 
PRINTS OUT
     #
    ##
   ###
  ####
######
*/


function reverseStairCase(n){
	var staircase = '';
	for( var i = 1; i<=n; i++){
		staircase += "#";
		console.log(staircase);
	}
}

/*
PRINTS OUT
#
##
###
####
#####
######
*/



