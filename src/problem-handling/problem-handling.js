const { problemRegex, answerRegex } = require("../statics/key-patterns");
require("../../common/array-extensions");

const extractAnswer = (problemText) => {
    const answerMatch = new RegExp(answerRegex).exec(problemText);

    if(!answerMatch || !answerMatch[1]){
        return null;
    }
    return answerMatch[3].trim();
}

const extractProblemAnswers =  (message, extractAnswer) => message
.split(problemRegex)
.slice(1)
.asPairs()
.map(([ problemId,  problemText]) => {
      return {
          problemId,
          answer: extractAnswer(problemText)
      }
  });

module.exports = {
    extractProblemAnswers,
    extractAnswer
}