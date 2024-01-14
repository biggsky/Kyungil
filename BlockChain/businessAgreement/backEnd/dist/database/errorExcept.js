"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFn = void 0;
const ErrorFn = (err, req, res, next) => {
    const status = err.name || 500;
    res.json({
        status: status,
        msg: err.message
    });
};
exports.ErrorFn = ErrorFn;
