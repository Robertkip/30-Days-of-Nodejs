var fs = require('fs');
var crypto = require('crypto');
var getHash = ( content ) => {				
				var hash = crypto.createHash('md5');
				//passing the data to be hashed
				data = hash.update(content, 'utf-8');
				//Creating the hash in the required format
				gen_hash= data.digest('hex');
				return gen_hash;
}
//Creating a readstream to read the file
var myReadStream = fs.createReadStream('new.txt');

var rContents = '' // to hold the read contents;
myReadStream.on('data', function(chunk) {
		rContents += chunk;
});
myReadStream.on('error', function(err){
		console.log(err);
});
myReadStream.on('end',function(){
		//Calling the getHash() function to get the hash
		var content = getHash(rContents) ;
		console.log('Content : ' + rContents);
		console.log('Hash : ' + content);
});
