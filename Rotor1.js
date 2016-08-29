var enigma = require('enigma-js')
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

'Q':[2,2],
'W':[2,3],
'E':[2,4],
'R':[2,5],
'T':[2,6],
'Y':[2,7],
'U':[2,8],
'I':[2,9],
'O':[2,10],
'P':[2,11],

'A':[3,2],
'S':[3,3],
'D':[3,4],
'F':[3,5],
'G':[3,6],
'H':[3,7],
'J':[3,8],
'K':[3,9],
'L':[3,10],

'Z':[4,3],
'X':[4,4],
'C':[4,5],
'V':[4,6],
'B':[4,7],
'N':[4,8],
'M':[4,9],

' ':[5,4]

}
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

  var default_settings = {
    rotors: [
      {type: "III", ring: 0, position: "A"}, // Right
      {type: "II",  ring: 0, position: "A"}, // Middle
      {type: "I",   ring: 0, position: "A"}  // Left
    ],
    plugboard: [
      "AB",
      "CD",
      "EF",
      "GH"
    ],
    reflector: "B",
    spacing: 4
  }

  enigma.load(default_settings)

  // on any data into stdin
  stdin.on( 'data', function( key ){
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
      Chroma.UnInitChroma();
      process.exit();
    }
    // write the key to stdout all normal like
    //var encoded_key=from_map[key] || key;
    var encoded_key=enigma.process(key.toUpperCase())
    var k = map[encoded_key];
    console.log(k);
    if (k) {
      customGrid[k[0]][k[1]] = {Red:0, Green:100, Blue:255 };
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
