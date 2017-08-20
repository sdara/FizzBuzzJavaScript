/*
	Fizz buzz is a group word game for children to teach 
	them about division.[1] Players take turns to count 
	incrementally, replacing any number divisible by three 
	with the word "fizz", and any number divisible by five 
	with the word "buzz".
*/

( function() {
	var i, str;
	
	for( i = 1; i <= 100; i += 1 ) {
		str = '';
		
		if( i % 3 == 0 ) {
			str += 'Fizz';
		}
		
		if( i % 5 == 0 ) {
			str += 'Buzz';
		}
		
		if( str === '' ) {
			str = i;
		}
		
		console.log( str );
	}
} )();