import { createMachine, assign } from "xstate";

type CounterEvent = { type: "SET" };

type CounterState = { value: "INC"; context: { count: number } } | { value: "DEC"; context: { count: number } };

export const countMachine = createMachine({
  // context는 맥락이라는 의미이다. Machine이 각 상태에서 맥락을 통하여 처리를 할 수 있음을 의미하는 것 같다.
  // 우선 보여지는 것으로는 count라는 벨류를 각 상태에서 가져다 쓸 수 있을 것으로 보인다.
  context: {
    count: 0,
  },
  on: {
    INC: {
      // 증가
      actions: assign({
        count: ({ context }) => context.count + 1,
      }),
    },
    DEC: {
      // 감소
      actions: assign({
        count: ({ context }) => context.count - 1,
      }),
    },
    SET: {
      // 지정
      actions: assign({
        count: ({ event }) => Number(event.count),
      }),
    },
  },
});

export default countMachine;
