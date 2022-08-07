const { ValidationError } = require("../../common/errors/errors");
const { checkInput } = require("../../src/email-handling/email-validation");

test('Throws when incoming student response does not have valid email', () => {

    const handleEmailWithSender = sender => () => checkInput({sender, date: new Date(2021, 9, 8), message: "Here is my repsonse"});

    expect(handleEmailWithSender("student@test.com")).not.toThrowError();

    expect(handleEmailWithSender("studenttest.com")).toThrowError(new Error("Invalid sender"));
    expect(handleEmailWithSender("@test.com")).toThrowError(new Error("Invalid sender"));
    expect(handleEmailWithSender("student@.com")).toThrowError(new Error("Invalid sender"));
    expect(handleEmailWithSender("student@test")).toThrowError(new Error("Invalid sender"));
    expect(handleEmailWithSender("student@test")).toThrowError(ValidationError);
  });