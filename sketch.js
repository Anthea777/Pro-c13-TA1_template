var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 
}

function draw() {
 const value= document.getElementById("vowels").value();
  
  switch(value){
    case 'a':
      console.log("vowel");
      break;
      case 'e':
      console.log("vowel");
      break;
       case 'i':
      console.log("vowel");
      break;
       case 'o':
      console.log("vowel");
      break;
       case 'u':
      console.log("vowel");
      break;
    default:
      console.log("Please enter a character that is a vowel")
  }
   
}

