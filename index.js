// saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`; // Fix: Use backticks for template literals
}
console.log(saturdayFun()); 

// mondayWork
function mondayWork(task = "go to the office") {
  return `This Monday, I will ${task}.`; // Fix: Use backticks for template literals
}
console.log(mondayWork()); 

// wrapAdjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`; // Fix: Use backticks for template literals
  };
}
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); // Output: You are !!!special!!!!
