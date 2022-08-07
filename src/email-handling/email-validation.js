const { ValidationError } = require("../../common/errors/errors");
const {isEmailKnown, isEmailValid} = require('../../src/email-handling/email-helper');

const checkInput = studentResponseEmail => {
    if(!studentResponseEmail.sender){
        throw new InputEvent("Missing sender");
    }
    if(!isEmailValid(studentResponseEmail.sender)){
        throw new ValidationError("Invalid sender");
    }
    if(!isEmailKnown){
        throw new ValidationError("Unknown sender");
    }
    if(!studentResponseEmail.message){
        throw new ValidationError("Empty message");
    }
}

module.exports = {
    checkInput
};