import { exec, execSync } from "child_process";

interface JsonCommit{
	author:  string,
	email:   string,
	subject: string,
	ahash:   string,
	hash:    string
}

const COMMAND = "git log -1 --format=%an/%ae/%s/%h/%H";

exports.async = function(cb: Function){
	exec(COMMAND, (err, stdout, stderr) => {
		if(stderr){
			return process.stdout.write(stderr);
		}
		cb(createJson(stdout));
	});
};

exports.sync = function(){
	let buffer: Buffer;
	try{
		buffer = execSync(COMMAND);
	}catch(e){
		return;
	}
	return createJson(buffer);
};

function createJson(param: string | Buffer){
	 let [
		author,
		email,
		subject,
		ahash,
		hash
	] = param.toString().split("/");

	let json = {
		author,
		email,
		subject,
		ahash,
		hash,
	};

	return json;
}