"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretOrKey = exports.generateRandomKey = void 0;
const crypto = require("crypto");
const generateRandomKey = () => {
    return crypto.randomBytes(32).toString("hex");
};
exports.generateRandomKey = generateRandomKey;
exports.secretOrKey = (0, exports.generateRandomKey)();
//# sourceMappingURL=secret.js.map