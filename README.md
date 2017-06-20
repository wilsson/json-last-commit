[![npm version](https://badge.fury.io/js/json-last-commit.svg)](https://badge.fury.io/js/json-last-commit)
[![Build Status](https://travis-ci.org/wilsson/json-last-commit.svg?branch=master)](https://travis-ci.org/wilsson/json-last-commit)

> **json-last-commit** - Get some data from the last commit in a json.

## Usage 

### Sync
```js
var jlc = require("json-last-commit");
var commit = jlc.sync();
console.log(commit);
```

### Async
```js
var jlc = require("json-last-commit");
jlc.async(function(commit){
	console.log(commit);
});
```

### Output
```js
{ 
	author: 'wilsonft',
	email: 'wilsonft83@gmail.com',
	subject: 'add commit',
	ahash: '5f173a6',
	hash: '5f173a6cc0cc6c37d91d1305ea0623bdc787ba8d' 
 }
```