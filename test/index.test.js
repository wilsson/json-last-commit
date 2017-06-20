var jlc = require("../lib/main");
var commit = jlc.sync();

test('Author name type string', function(){
    expect(typeof commit.author).toEqual("string");
});

test('Abbreviated commit hash type string', function(){
    expect(typeof commit.ahash).toEqual("string");
});
