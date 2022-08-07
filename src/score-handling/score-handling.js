const computeScores = (studentResponse, assignmentAnswerSheet, isCorrectAnswer) => assignmentAnswerSheet.problems.map(problem => {
    const studentAnswer = studentResponse.problemAnswers.find(a => a.id === problem.problemId);
    const score = isCorrectAnswer(studentAnswer, problem) ? problem.credits : 0;
    return {
        problemId: problem.problemId,
        score,
    };
});

module.exports = {
    computeScores
}