const { ResponseValidationError, EntityNotFoundError } = require("../../common/errors/errors");
const { extractProblemAnswers, extractAnswer } = require("../problem-handling/problem-handling");
const { assignmentRegex } = require("../statics/key-patterns");

const getAssignmentFromMessage = (message, getAssignmentOrDefaultById) => {
    const matches = new RegExp(assignmentRegex).exec(message);
    if(!matches || !matches[1]){
        throw new ResponseValidationError("Missing assignment id");
    }
    const assignmentId = matches[1];
    const assignment = getAssignmentOrDefaultById(assignmentId);
    if(!assignment){
        throw new EntityNotFoundError("Assignment");
    }
    return assignment;
}

const extractResponseFields = (studentResponseEmail) => {
    const assignment = getAssignmentFromMessage(studentResponseEmail.message);
    const problemAnswers = extractProblemAnswers(studentResponseEmail.message, extractAnswer);
    return {
        assignment,
        problemAnswers
    };
}


module.exports = {
    getAssignmentFromMessage,
    extractResponseFields
}