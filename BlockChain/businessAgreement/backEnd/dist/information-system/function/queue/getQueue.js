"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.items = [];
    }
    // 큐에 요소 추가
    enqueue(item) {
        this.items.push(item);
    }
    // 큐에서 요소 제거 및 반환
    dequeue() {
        return this.items.shift();
    }
    // 큐가 비어있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }
    // 큐의 크기 반환
    size() {
        return this.items.length;
    }
    // 큐의 첫 번째 요소 반환 (제거하지 않음)
    peek() {
        return this.items[0];
    }
}
exports.Queue = Queue;
// 큐 테스트
// const myQueue = new Queue<number>();
