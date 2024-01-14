export class Queue<T> {
  private items: T[] = [];

  // 큐에 요소 추가
  enqueue(item: T): void {
    this.items.push(item);
  }

  // 큐에서 요소 제거 및 반환
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // 큐가 비어있는지 확인
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 큐의 크기 반환
  size(): number {
    return this.items.length;
  }

  // 큐의 첫 번째 요소 반환 (제거하지 않음)
  peek(): T | undefined {
    return this.items[0];
  }
}

// 큐 테스트
// const myQueue = new Queue<number>();
