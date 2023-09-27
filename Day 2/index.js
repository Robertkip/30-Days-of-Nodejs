//Read file in Nodejs Asynchronously :

const fs = require('fs');
fs.readFile('message.txt', (err, data) => {
    if (err)
        throw err;

    console.log("Content : " + data);
});

//Read file synchronously

//const fs = require('fs');
const filename = 'context.txt';
const content = fs.readFileSync(filename);
console.log('Content : ' + content);


//Write file in Nodejs
//start by using Asyncronously
//const fs = require('fs');
const cons = "This is the content of the file Please share your rationale or evidence for the high school performance selections above. Make reference to provincial, state or nation-wide scoring systems, rankings, or recognition awards, or to competitive or selective college entrance results such as SAT or ACT scores, JAMB, matriculation results, IB results etc"
fs.writeFile('mark.txt', content, (err) => {
    if (err)
        throw err;
    console.log('It is saved');
});


//write using synchronously function
const mark = "Then declare the various functions with every React form field value, so when the user inserts the data within the form input field, a state will be set accordingly."
fs.writeFileSync('Master.txt', content);
console.log("File Written Successfully");


