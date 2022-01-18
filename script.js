let words = new Map();
let passwordExceptPreviousWord = ""
let previousWord = "";
let myTextSize = 25;


function preload() {
  loadStrings('beale.wordlist.asc.txt', createMap);
}
let lookupKey = "12342";

function createMap(strings) {
  for (let line of strings) {
    let [key, word] = line.split('\t');
    if (key.length === 5) {
      words.set(key, word);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  textSize(myTextSize);
}

function draw() {
  background(10, 200, 200);
  text(`${passwordExceptPreviousWord}${previousWord}`, 10, height / 2);
  noLoop();
}
function keyPressed() {
  if (key === " ") {
    if( `${passwordExceptPreviousWord}${previousWord}`.length < 60 ) { 
      passwordExceptPreviousWord += previousWord;
      // previousWord;
    
      previousWord = words.get(generateLookupKey());
      while (10 + textWidth(`${passwordExceptPreviousWord}${previousWord}`) > width) {
        myTextSize--;
        textSize(myTextSize);

      }
    } else {
      console.log("you are over the length limit")
    }
//if beyond length of string no update
//print "you reached your limit"
  }
  //TO DO: if(click <3 times more stop function
  //lookupKey = generateLookupKey();
  redraw();
}

 // if (key === "d") {

    // previousWord = 'deleted';
    //need to change to capatilze
    //stop when hits frame

    //text witdh pass in string how many pixels wide it is
    //if text width greater than width of screen- then shrink text/
    //set text size 
    //let mytextsize=25
    //while -
    //mytextsize--;
    //textsize(mytextsize)
    //function text size

  //  redraw()
 // }


//add something when to make the size lowering stop

function generateLookupKey() {
  key = "";
  const dieFaces = [1, 2, 3, 4, 5, 6]
  for (let i = 0; i < 5; i++) {
    key = `${key}${random(dieFaces)}`;
  }

  return key;
}

// draw i will need to display password + previous word 
// key pressed capatalize previous word 