

const makeBody = params => {
    params.subject = new Buffer.from(params.subject).toString("base64");
    const str = [
      'Content-Type: text/plain; charset="UTF-8"\n',
      "MINE-Version: 1.0\n",
      "Content-Transfer-Encoding: 7bit\n",
      `to: ${params.to} \n`,
      `from: ${params.from} \n`,
      `subject: =?UTF-8?B?${params.subject}?= \n\n`,
      params.message
    ].join(""); // <--- Modified
    return new Buffer.from(str)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
};

const createGmail = ({sendFromEmail, toEmail, subject, message}) => {

    const raw = makeBody({
        to: toEmail,
        from: sendFromEmail,
        subject,
        message: message + "\n a9af7bba-37ed-4915-9329-700a45cb2221",
      });

    return {
    userId: 'me',
    resource: {
        raw,
    }
};
}

module.exports = {
    createGmail
}