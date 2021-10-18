const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let tutorialsVar= tutorials.map(tutorial => {
  let tutorialStr= tutorial.split(" ")
  let newTutorialStr= tutorialStr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return newTutorialStr
 })
const titleCased = function() {
  return tutorialsVar
}

console.log(titleCased())

// const titleCased = function(tutorials) {
//   return tutorials.map(tutorial => {
//     let tutorialStr= tutorial.toLowerCase().split(" ")
//     let newTutorialStr= tutorialStr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
//     return newTutorialStr
//    })
// }

// console.log(titleCased(tutorials))