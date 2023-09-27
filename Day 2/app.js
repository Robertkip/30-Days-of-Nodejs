//Append files using Nodejs
const fs = require('fs');
new_data = "This data will be appended at the end of the file.";
fs.appendFile('input.txt', new_data, (err) => {
    if (err)
        throw err;
    console.log('The new content was appended Successfully');
});

//Append using file synchronously
const content = "We are Appending this file synchronously using node.js";
fs.appendFileSync('Input.txt', content);
console.log("File Appended Successfully");


//Rename file using Nodejs 
//using File Asynchronously
fs.rename('Mark.txt', 'new_data.txt', (err) => {
    if (err)
        throw err;
    console.log('File named successfully');
});
console.log('This is Asynchronous method');


///using File synchronously method
fs.renameSync('message.txt', "newdata.txt");
console.log('Filed renamed successfully');

console.log('This method is Synchronous');