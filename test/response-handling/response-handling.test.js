const { createResponseToStudent } = require("../../src/response-handling/response-handling");

test('Can get response text', () => {
    const input = {
        scoreCard: {
            scores: [
                {
                    problemId: 28,
                    score: 0
                },
                {
                    problemId: 29,
                    score: 2
                },
            ],
            total: 2
        },
        maxScore: 3
    };

    const totalLine = 'Du scorede 2/3 points.';
    const problemLine1 = 'Problem 28: 0';
    const problemLine2 = 'Problem 29: 2';

    const result = createResponseToStudent(input);
    expect(result).toContain(totalLine);
    expect(result).toContain(problemLine1);
    expect(result).toContain(problemLine2);
    });