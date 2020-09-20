function grader(scores){
var result= 0;
scores.forEach(element => {
    result += element;
});
var grade = result/scores.length;
return grade;
}

console.log("Average score for environment science ")
var scores= [10, 20, 30];
console.log(grader(scores));