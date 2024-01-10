// In Nodejs The remove of folders
// //In Node v16.x the option recursive is deprecated for
// fs.rmdir of callback API, instead use fs.rm to delete folders that have
// content in them:

const fs = require('fs-extra')

const folder = './joe'
fs.remove(folder, (err) => {
 console.error(err)
});