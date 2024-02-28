import React from "react";
import Lottie from "lottie-react";
import rotateCup from "./lotties/rotate-cup.json";
import { Stack, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import RestoreIcon from "@mui/icons-material/Restore";
import { useActor } from "@xstate/react";
import { CupMachine } from "./machine/CupMachine";
function WhatIsActor() {
  // const cupActor = useActor(CupMachine); // ㅇ ㅏ useActor 예제가 생각보다 부실하다

  return (
    <>
      <Stack>
        <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center" }}>
          <Lottie animationData={rotateCup}></Lottie>
        </Box>
        <ToggleButtonGroup value="base" sx={{ justifyContent: "Center" }}>
          <ToggleButton value="Play">
            <PlayArrowIcon />
          </ToggleButton>
          <ToggleButton value="Stop">
            <StopIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value="functional" sx={{ justifyContent: "Center" }}>
          <ToggleButton value="Reverse">
            <RestoreIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
}

export default WhatIsActor;
