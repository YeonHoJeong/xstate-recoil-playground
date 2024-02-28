import { createActor, createMachine } from "xstate";
/**
 * @description Cup을 이리돌리고 저리돌리고 멈추게하는 머신
 *  Play : 재생
 *  Stop : 정지
 *  Reverse : Toggle 시 역방향
 */
export const CupMachine = createMachine({
  id: "CupMachine",
  initial: "play",
  states: {
    play: {},
    stop: {},
    reverse: {},
  },
});

export const CupActor = createActor(CupMachine);
