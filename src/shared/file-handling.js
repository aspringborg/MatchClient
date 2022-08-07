const fs = require('fs');

const getFileContentsAsJsonOrThrow = async (path) => {
    const stringContent = await getFileContentsAsStringOrThrow(path);
    return JSON.parse(stringContent);
};
const getFileContentsAsStringOrThrow = async (path) => {
    const contents = await getFileContentsOrThrow(path);
    return Buffer.from(contents).toString();
};
const getFileContentsOrThrow = (path) => fs.promises.readFile(path);

module.exports = {
    getFileContentsAsJsonOrThrow,
    getFileContentsAsStringOrThrow,
    getFileContentsOrThrow
}