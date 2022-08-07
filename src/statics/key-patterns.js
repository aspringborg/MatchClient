const assignmentRegex = /#Assignment (\d+)#/g;
const problemRegex = /#Problem (\d+)#/g;
const answerRegex = new RegExp(/#Answer \(((\w|,|:)+)\)#:(.*)\n/g);

module.exports = {
    assignmentRegex,
    problemRegex,
    answerRegex
}