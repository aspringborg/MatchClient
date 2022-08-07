const { AssignmentClosedError, EntityNotFoundError } = require("../../common/errors/errors");
const {extractResponseFields} = require("../message-handling/message-handling");
const { assignmentRegex } = require("../statics/key-patterns");
const {checkInput} = require("./email-validation");

const isCorrectAnswer = (problem, studentAnswer) => true;

const summarizeToScoreCard = (scores) => scores.reduce((card, problemScore) => {card.total += problemScore.score; card.scores = [...card.scores, problemScore]}, {total: 0, scores: []} );

const evaluateStudentResponse = (studentResponse, assignmentSetup) => {
    const scores = computeScores(studentResponse, assignmentSetup.answerSheet);
    return {
        scoreCard: summarizeToScoreCard(scores),
        maxScore: assignmentSetup.maxScore
    };
}

const updateStatisticsForStudent = async (scoreCard, databaseAccessor) => {
    
}

const submitScoreCard = async (scoreCard, databaseAccessor) => {
    await updateStatisticsForStudent(scoreCard, databaseAccessor);
    updateStatisticsForClass();
    updatestatisticsForProblems();
};

const isAssignmentAvailableToStudent = (assignment, studentId) => assignment.givenTo.some(student => student.id  === studentId);
const isAssignmentOpen = (assignmentSetup) => assignmentSetup.closeDate < new Date();

const checkAssignment = (assignmentSetup, studentId) => {
    if(!isAssignmentAvailableToStudent(studentId)){
        throw new EntityNotFoundError("Assignemnt");
    }
    if(!isAssignmentOpen(assignmentSetup)){
        throw new AssignmentClosedError("This assignment closed on " + assignmentSetup.closeDate);
    }
}

const handleEmail = async (studentResponseEmail, databaseAccessor) => {
    checkInput(studentResponseEmail);
    const student = await getStudentByEmail(studentResponseEmail.sender, databaseAccessor);
    const studentResponse = extractResponseFields(studentResponseEmail.message);
    const assignmentSetup = await getAssignmentSetupById(studentResponse.assignment.id, databaseAccessor);
    checkAssignment(assignmentSetup, student);
    const scoreCard = evaluateStudentResponse(studentResponse, assignmentSetup);
    await submitScoreCard(scoreCard, databaseAccessor);
    const studentResponseEvaluation = createResponseToStudent(scoreCard);

    return studentResponseEvaluation;
}

module.exports = handleEmail;