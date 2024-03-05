import { assign, createMachine } from "xstate";
/**
 * @description Cup을 이리돌리고 저리돌리고 멈추게하는 머신
 *  Play : 재생
 *  Stop : 정지
 *  Reverse : Toggle 시 역방향
 */

export enum CupPlayState {
  Play = "play",
  Stop = "stop",
}

export enum ToggleState {
  Active = "active",
  Inactive = "inactive",
}

export const CupPlayMachine = createMachine({
  id: "CupPlayMachine",
  context: {
    toggleState: CupPlayState.Play,
  },
  on: {
    "PLAY_TOGGLE_BUTTON.CHANGE": {
      actions: assign({
        toggleState: () => CupPlayState.Play,
      }),
    },
    "STOP_TOGGLE_BUTTON.CHANGE": {
      actions: assign({
        toggleState: () => CupPlayState.Stop,
      }),
    },
  },
});
