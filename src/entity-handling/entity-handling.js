const { EntityNotFoundError } = require("../../common/errors/errors");

const getAssignmentSetupById = async (id, databaseAccessor) => {
    const assignmentSetup = await databaseAccessor('assignmentSetup', setups => setups.find(s => s.id === id));
    if(!assignmentSetup){
        throw new EntityNotFoundError(`No assignment setup with id: '${id}'`);
    }
    return assignmentSetup;
}

const getStudentByEmail = async (email, databaseAccessor) => {
    const student = await databaseAccessor('student', students => students.find(s => s.email === email));
    if (!student){
        throw new EntityNotFoundError(`No student with email: '${email}'`);
    }
    return student;
};

module.exports = {
    getAssignmentSetupById,
    getStudentByEmail
}