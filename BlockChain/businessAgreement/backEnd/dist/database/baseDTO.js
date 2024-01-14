"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDTO = void 0;
class BaseDTO {
    createDTO(data) {
        if (!data)
            throw new Error('body안에 데이터가 없습니다.');
        if (typeof data !== 'object')
            throw new Error('body 타입이 객체가 아닙니다.');
        for (const key in data) {
        }
    }
}
exports.BaseDTO = BaseDTO;
