//array of introductory words first thing of sentense
const firstMsg = ["hi ", "hello ", "hello there ", "knock knock "];

const everything {
    
}
//array of responses 2nd thing of sentense
const responsMsg = [
  "how are you ",
  "how can i help you ",
  "who is there ",
  "General Kenobi ",
];
//array of the jokes 3rd part
const jokeText = [
  "i invented a new word plagiarism",
  "Which is faster, hot or cold? Hot, because you can catch cold",
  "Why can't a blonde dial 911? A: She can't find the eleven.",
  "Where does Batman go to the bathroom? The batroom.",
];

//random Number generator
const randomNum = () => {
  let rNumber = Math.floor(Math.random() * firstMsg.length);
  console.log(rNumber);
  return rNumber;
};

//joke constructor
const theJoke = (rNum) => {
  //retrieve the first array item firstMsg
  let fPart = firstMsg[randomNum()];
  let scndPart = responsMsg[randomNum()];
  let lstPart = jokeText[randomNum()];

  console.log(fPart + scndPart + lstPart);
};

theJoke();