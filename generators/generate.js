var cli     		  = require('../lib/cli');
var args    		  = process.argv.slice(2, process.argv.length);
var command 		  = args[0];
var type    		  = args[1];
var gen_args    	  = args.slice(2, args.length);

if(!cli[command]) {
	console.log(command + ' is not a valid command');
} else if (!cli[command][type] && command === 'gen') {
	console.log(type + ' is not a valid generator type.')
} else {
	cli[command][type](gen_args);
}
