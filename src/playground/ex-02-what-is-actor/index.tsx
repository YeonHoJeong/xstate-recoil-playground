import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import rotateCup from "./lotties/rotate-cup.json";
import { Stack, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
// import RestoreIcon from "@mui/icons-material/Restore";
import { useActor } from "@xstate/react";
import { CupPlayState, CupPlayMachine } from "./machine/CupMachine";
function WhatIsActor() {
  // const cupActor = useActor(CupMachine); // ㅇ ㅏ useActor 예제가 생각보다 부실하다
  const [state, send] = useActor(CupPlayMachine);
  const cupLottieRef = useRef<LottieRefCurrentProps>(null);

  const handleToggleBtn = (event: React.MouseEvent<HTMLElement>, btnType: CupPlayState) => {
    console.log(state);
    switch (btnType) {
      case CupPlayState.Play:
        send({ type: "PLAY_TOGGLE_BUTTON.CHANGE" });
        cupLottieRef.current?.play();
        break;
      case CupPlayState.Stop:
        send({ type: "STOP_TOGGLE_BUTTON.CHANGE" });
        cupLottieRef.current?.pause();
        break;
    }
  };

  return (
    <>
      <Stack>
        <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center" }}>
          <Lottie lottieRef={cupLottieRef} animationData={rotateCup}></Lottie>
        </Box>
        <ToggleButtonGroup
          exclusive
          value={state.context.toggleState}
          onChange={(event: React.MouseEvent<HTMLElement>, btnType: CupPlayState) => handleToggleBtn(event, btnType)}
          sx={{ justifyContent: "Center" }}
        >
          <ToggleButton value={CupPlayState.Play} sx={{ width: "42px", height: "32px" }}>
            <PlayArrowIcon />
          </ToggleButton>
          <ToggleButton value={CupPlayState.Stop} sx={{ width: "42px", height: "32px" }}>
            <StopIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        {/**
         *         <ToggleButtonGroup value="functional" sx={{ justifyContent: "Center" }}>
          <ToggleButton value={CupState.Reverse} onClick={} sx={{ width: "84px", height: "32px" }}>
            <RestoreIcon />
          </ToggleButton>
        </ToggleButtonGroup>
         */}
      </Stack>
    </>
  );
}

export default WhatIsActor;
