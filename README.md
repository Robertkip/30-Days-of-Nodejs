Day 1: learning ?

Day 2: Learning?
Yes, that's correct! In Node.js, you can perform file I/O operations using the fs module. The fs module provides wrappers around standard POSIX functions for file system operations such as reading, writing, deleting, and renaming files.

To use this functionality, you need to require the fs module in your Node.js code. Here's an example of how to require the fs module:


  const fs = require('fs');
After requiring the fs module, you can use its methods to perform file I/O operations. The methods provided by the fs module support both synchronous and asynchronous forms.

For synchronous file I/O operations, you can use methods with the 'Sync' suffix, such as fs.readFileSync() and fs.writeFileSync(). These methods block the execution until the operation is completed.

On the other hand, for asynchronous file I/O operations, you can use methods without the 'Sync' suffix, such as fs.readFile() and fs.writeFile(). These methods allow for non-blocking execution and utilize callbacks or Promises to handle the results of the operation.

It's important to note that when using asynchronous methods, you'll need to provide a callback function or handle Promises to handle the result of the operation, as they do not block the execution flow like the synchronous methods.

I hope this clarifies how to use the fs module in Node.js for file I/O operations.


// Learning the difference between package.json and package.lock.json

--Purpose of package.json and package-lock.json:
package.json is a versioning file used to install multiple packages in a Node.js project
package.lock.json is created for locking the dependency with the installed version, ensuring the same results in every environment.

--package.json
Contains metadata about the project and functional dependencies required by the application.
Specifies the project name, version, description, main file, author, license, and scripts.

--package.lock.json
Locks the exact latest version of the package in the application and saves it in package.json.
Ensures the same dependencies are installed in different environments.

--Differences in Installed Versions
Without package.lock.json, there might be differences in installed versions in different environments.
package.lock.json ensures consistent results by installing exact same dependencies from package.json in all environments.

--Need for package-lock.json:
Package.lock.json is necessary to avoid differences in installed versions in different environments.

/*The fs module*/

The fs module provides a lot of very useful functionality to access and
interact with the file system.

const fs = require('fs')

Once you do so, you have access to all its methods, which include:
fs.access() : check if the file exists and Node.js can access it with its
permissions
fs.appendFile() : append data to a file. If the file does not exist, it's
created
fs.chmod() : change the permissions of a file specified by the filename
passed. Related: fs.lchmod() , fs.fchmod()
fs.chown() : change the owner and group of a file specified by the
filename passed. Related: fs.fchown() , fs.lchown()
fs.close() : close a file descriptor
fs.copyFile() : copies a file

fs.createReadStream() : create a readable file stream
fs.createWriteStream() : create a writable file stream
fs.link() : create a new hard link to a file
fs.mkdir() : create a new folder
fs.mkdtemp() : create a temporary directory
fs.open() : opens the file and returns a file descriptor to allow file
manipulation
fs.readdir() : read the contents of a directory
fs.readFile() : read the content of a file. Related: fs.read()
fs.readlink() : read the value of a symbolic link
fs.realpath() : resolve relative file path pointers ( . , .. ) to the full
path
fs.rename() : rename a file or folder
fs.rmdir() : remove a folder
fs.stat() : returns the status of the file identified by the filename
passed. Related: fs.fstat() , fs.lstat()
fs.symlink() : create a new symbolic link to a file
fs.truncate() : truncate to the specified length the file identified by the
filename passed. Related: fs.ftruncate()
fs.unlink() : remove a file or a symbolic link
fs.unwatchFile() : stop watching for changes on a file
fs.utimes() : change the timestamp of the file identified by the filename
passed. Related: fs.futimes()
fs.watchFile() : start watching for changes on a file. Related:
fs.watch()
fs.writeFile() : write data to a file. Related: fs.write()
One peculiar thing about the fs module is that all the methods are
asynchronous by default, but they can also work synchronously by appending
Sync .

/* for example */
fs.writeSync()
fs.write()
fs.renameSync()
fs.rename()


  Memoize.js
Question
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


//Add two promises

Given two promises, promise1 and promise2, return a new promise. Both promise1 and promise2 will resolve with a number. The returned promise should resolve with the sum of the two numbers.