const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const { createGmail } = require('./gmail-handling/gmail-handling');
const { resolve } = require('path');
const { getFileContentsAsJsonOrThrow, getFileContentsAsStringOrThrow } = require('./shared/file-handling');
const { testEmail } = require('../assests/test-data/test-data');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://mail.google.com/'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = '../tmp/tokens.json';
const SECRETS_PATH = '../assests/secrets/client_secret_639640104026-auhm6u0djinqu03t6sdr5piqgijm1555.apps.googleusercontent.com.json';

const setTokenFromCLI = async oAuth2Client => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const code = await questionAsync(rl, 'Enter the code from that page here: ').then(code => {rl.close(); return code;});
  const tokenResult = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokenResult.tokens);
  await fs.promises.writeFile(TOKEN_PATH, JSON.stringify(tokenResult.tokens));
  return oAuth2Client;
};

const questionAsync = (rl, query) => new Promise((resolve, reject) => {
    try {
        rl.question(query, code =>  resolve(code));
    } catch(err){
        reject(err);
    }
});


const getGmailApi = async () => {
    const credentials = await getFileContentsAsJsonOrThrow(SECRETS_PATH).catch(err => console.log('Failed to load secrets: ', err));
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
    const auth = await setCredentialsOrThrow(oAuth2Client);
    return google.gmail({version: 'v1', auth})
}

const setCredentialsOrThrow = async auth => {
    try {
        const tokens = await getFileContentsAsJsonOrThrow(TOKEN_PATH);
        console.log("Saved token: ", tokens)
        auth.setCredentials(tokens);
        return auth;
    } catch (err){
        console.log("Failed: ", err);
        return await setTokenFromCLI(auth);
    }
};

const sendEmail = (gmail, email) =>  gmail.users.messages.send(email).catch(e => console.error(e));

const readEmails = async gmail => {
    const response = await gmail.users.messages.list({userId: testEmail, q:"is:unread a9af7bba-37ed-4915-9329-700a45cb2221"});
    const messageData = response.data;
    if(!messageData.resultSizeEstimate){
        console.log("No messages");
        return;
    } 
    const messageListResults = messageData.messages;

    for(const messageResult of messageListResults){
        const message = await gmail.users.messages.get({userId:testEmail, id: messageResult.id });
        const parts = message.data.payload.parts;
        for (const part of parts) {
            console.log(part)
            const partData = new Buffer(part.body.data, 'base64').toString('utf-8');
            console.log(partData);
        }
        
    }
}

const main = async () => {

    const send = async () => {
        const message = await getFileContentsAsStringOrThrow('../assests/examples/example1.txt');
        const gmail = await getGmailApi();
        const response = await sendEmail(gmail, createGmail({sendFromEmail: testEmail, toEmail: testEmail, subject: "Dette er en email", message}));
        console.log(response);
    }

    //await send();

    const receive = async () => {
        // hent beskeder
        const gmail = await getGmailApi();
        await readEmails(gmail);
    }
    await receive();

}

main().then( () => console.log("completed")).catch(err => console.error("Total error: ", err));

