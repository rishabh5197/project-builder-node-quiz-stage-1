const fs = require("fs");
const quiz = require('./quiz');

console.log(quiz())

// Writing empty array in quiz.json
fs.writeFileSync("quiz.json", JSON.stringify({ question : [] }))

// Fetching empty array from quiz.json
const quizJson = JSON.parse(fs.readFileSync("quiz.json"))

// Appending data
quizJson.question.push(quiz())

// Writing data into quiz.json
fs.writeFileSync("quiz.json", JSON.stringify(quizJson))