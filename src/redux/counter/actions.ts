export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export namespace counterActions {
  export function increment() {
    return { type: INCREMENT };
  }

  export function decrement() {
    return { type: DECREMENT };
  }
}
