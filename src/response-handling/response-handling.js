const createResponseToStudent = ({scoreCard, maxScore}) => {
    const scoreLines = scoreCard.scores
        .map(({problemId, score}) => `Problem ${problemId}: ${score}`)
        .reduce((text, line) => text + '\n' + line , ''); 
    
    return `
    Hej
    Tak for din besvarelse.
    Du scorede ${scoreCard.total}/${maxScore} points.
    ${scoreLines}
    `;
    };

module.exports = {
    createResponseToStudent
}