const { expect } = require("@jest/globals");
const { extractProblemAnswers, extractAnswer } = require("../../src/problem-handling/problem-handling");
const { answerRegex } = require("../../src/statics/key-patterns");

test('Can get answers for problems from message', () => {
  const message = `
    #Problem 1#
  1) Reducer udtrykket lkdsjfld

  #Answer (Expression)#: 

  #Problem 2#
  2) Udregn følgende:
  33 + 44,45 = 

  #Answer (Number:,)#:
  `;
  var counter = 0;
  const extractAnswer = text => `Answer ${++counter}`;

  const problemAnswers = extractProblemAnswers(message, extractAnswer);

  const expectedResult = [
    {
      problemId: '1',
      answer: 'Answer 1'
    },
    {
      problemId: '2',
      answer: 'Answer 2'
    }
  ];
    expect(problemAnswers).not.toBeFalsy();
    expect(problemAnswers).toHaveLength(expectedResult.length);
    expect(problemAnswers).toMatchObject(expectedResult);
  });


  test('Can get expression answer', () => {
    const message = `
    1) Reducer udtrykket lkdsjfld
  
    #Answer (Expression)#: 2a+b
    `;
    
    expect(extractAnswer(message)).toBe('2a+b');
    });

  test('Can get number answer', () => {
      const message = `
      2) Udregn følgende:
        33 + 44,45 = 

        #Answer (Number:,)#: 25,43
        
      `;
      
      expect(extractAnswer(message)).toBe('25,43');
      });

  test('Can get number answer', () => {
      const message = `
      3) Vælg én af følgende:

        #Answer (Options)#: 3
        #Option 1#:
        Værdi 1
        #Option 2#:
        Værdi 2
        #Option 3#:
        Værdi 3

      `;
      
      expect(extractAnswer(message)).toBe('3');
      });

  test('Can get text answer', () => {
      const message = `
      3) Antag et svar som tekst

        #Answer (text)#: Dette er et svar.
        
      `;
      expect(extractAnswer(message)).toBe('Dette er et svar.');
      });