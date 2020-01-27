let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    translate.translateText({
        SourceLanguageCode: "tr",
        TargetLanguageCode: "en",
        Text: "baba"
    }).promise()
        .then(data => {
            // your code goes here
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            // error handling goes here
        });

    return { "message": "Successfully executed" };
};