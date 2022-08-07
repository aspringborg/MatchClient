const { ResponseValidationError } = require("../../common/errors/errors");
const { getAssignmentFromMessage } = require("../../src/message-handling/message-handling");

const assignment = {id: "123"};
const mockGetAssignment = id => assignment; 

test('Can get assignment when key present', () => {

    const message = `
    Hej 
Her er dagens opgaver:

#Assignment 1#
#Problem 1#
1) Reducer udtrykket lkdsjfld

#Answer (Expression)#: 

#Problem 2#
2) Udregn følgende:
33 + 44,45 = 

#Answer (Number:,)#:

#Problem 3#
3) Vælg én af følgende:

#Answer (Options)#:
#Option 1#:
Værdi 1
#Option 2#:
Værdi 2
#Option 3#:
Værdi 3

#Problem 4#
3) Antag et svar som tekst

#Answer (text)#:

    `;

    expect(getAssignmentFromMessage(message, mockGetAssignment)).toBe(assignment);
  });

  test('Throws error when assignment key not present', () => {

    const message = `
    Hej 
Her er dagens opgaver:
...
    `;

    expect(() => getAssignmentFromMessage(message, mockGetAssignment)).toThrow(new ResponseValidationError("Missing assignment id"));
  });