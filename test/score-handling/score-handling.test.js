const { computeScores } = require('../../src/score-handling/score-handling');

test('Can compute score card', () => {

    const studentResponse = {
        problemAnswers: [
            {
                id: 1,
                answer: 'true'
            },
            {
                id: 2,
                answer: 'false'
            }
        ],
    };

    const assignmentAnswerSheet= {
        problems: [
            {
                problemId: 1,
                credits: 1
            },
            {
                problemId: 2,
                credits: 2
            },
        ],
    };

    const isCorrectAnswer = (response, fact) => response.answer === 'true';
    const expectedResult = [
        {
            problemId: 1,
            score: 1,
        },
        {
            problemId: 2,
            score: 0,
        }
    ];
    
    expect(computeScores(studentResponse, assignmentAnswerSheet, isCorrectAnswer)).toMatchObject(expectedResult);
    });