//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let scorePass = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 70) {
      scorePass.push(array[i]);
    }
  }
  if (scorePass.length >= 5) {
    operation(true);
  } else console.log(scorePass);
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

atLeastFive(studentScoresRoom1, function (score) {
  scoreRoom1Result = score;
});

atLeastFive(studentScoresRoom2, function (score) {
  scoreRoom1Result = score;
});

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
