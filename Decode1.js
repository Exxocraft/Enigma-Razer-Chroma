var Chroma = require('./');
var customGrid = [];

var map={
'1':[1,2],
'2':[1,3],
'3':[1,4],
'4':[1,5],
'5':[1,6],
'6':[1,7],
'7':[1,8],
'8':[1,9],
'9':[1,10],
'0':[1,11],

'q':[2,2],
'w':[2,3],
'e':[2,4],
'r':[2,5],
't':[2,6],
'y':[2,7],
'u':[2,8],
'i':[2,9],
'o':[2,10],
'p':[2,11],

'a':[3,2],
's':[3,3],
'd':[3,4],
'f':[3,5],
'g':[3,6],
'h':[3,7],
'j':[3,8],
'k':[3,9],
'l':[3,10],

'z':[4,3],
'x':[4,4],
'c':[4,5],
'v':[4,6],
'b':[4,7],
'n':[4,8],
'm':[4,9],

' ':[5,4]

}

var to_keys=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var from_keys = ['k','l','y','h','z','q','v','t','f','u','x','m','c','i','d','w','e','n','o','a','r','s','b','j','p','g'];

var from_map={};
for (var i=0; i<26; i++) {
	from_map[from_keys[i]] = to_keys[i];
}


// Initialize Chroma
var init = Chroma.InitChroma();
if(init){
    // Chroma initalized
    for(var r=0; r<6; r++){
      customGrid[r]=[];
      for(var c=0; c<22; c++){
        customGrid[r][c]={
                    Red: 0,
                    Green: 0,
                    Blue: 0     
        };
      }   
    }
	Chroma.Keyboard.SetCustom(customGrid);

	var stdin = process.stdin;

	// without this, we would only get streams once enter is pressed
	stdin.setRawMode( true );

	// resume stdin in the parent process (node app won't quit all by itself
	// unless an error or process.exit() happens)
	stdin.resume();

	// i don't want binary, do you?
	stdin.setEncoding( 'utf8' );

	// on any data into stdin
	stdin.on( 'data', function( key ){
	  // ctrl-c ( end of text )
	  if ( key === '\u0003' ) {
	  	Chroma.UnInitChroma();
	    process.exit();
	  }
	  // write the key to stdout all normal like
	  var encoded_key=from_map[key] || key;
	  var k = map[encoded_key];
	  console.log(k);
	  if (k) {
		  customGrid[k[0]][k[1]] = {Red:100, Green:255, Blue:0 };
		  Chroma.Keyboard.SetCustom(customGrid);
		   setTimeout(function(){
       
		  customGrid[k[0]][k[1]] = {Red:0, Green:0, Blue:0 };
		  Chroma.Keyboard.SetCustom(customGrid);
    },3500);
		}
	  //process.stdout.write( key );
	});

	 setTimeout(function(){
        // Uninitialize Chroma
        //console.log(Chroma.UnInitChroma());
    },30000);
}