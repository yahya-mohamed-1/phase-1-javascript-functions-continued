// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function expression for mondayWork
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function that returns a function to wrap an adjective
function wrapAdjective(flair = "*") {
  return function (adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
