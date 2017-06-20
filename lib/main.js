"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var COMMAND = "git log -1 --format=%an/%ae/%s/%h/%H";
exports.async = function (cb) {
    child_process_1.exec(COMMAND, function (err, stdout, stderr) {
        if (stderr) {
            return process.stdout.write(stderr);
        }
        cb(createJson(stdout));
    });
};
exports.sync = function () {
    var buffer;
    try {
        buffer = child_process_1.execSync(COMMAND);
    }
    catch (e) {
        return;
    }
    return createJson(buffer);
};
function createJson(param) {
    var _a = param.toString().split("/"), author = _a[0], email = _a[1], subject = _a[2], ahash = _a[3], hash = _a[4];
    var json = {
        author: author,
        email: email,
        subject: subject,
        ahash: ahash,
        hash: hash,
    };
    return json;
}
