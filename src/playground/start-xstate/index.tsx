import React from "react";
import { useMachine } from "@xstate/react";
import countMachine from "./machine/countMachine";
import { Button, Input, Stack } from "@mui/material";

function StartXState() {
  const [current, send] = useMachine(countMachine); // current는 현재 상태를 의미하는 것 같다. send는 내가 무엇을 할 것인지 액션을 전하는 함수인듯

  return (
    <>
      <div>aaaaa</div>
      <div>test</div>
      <div>bbbbb</div>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button onClick={() => send({ type: "INC" })}>INC</Button>
      </Stack>
      <Stack>
        <Input
          onChange={(event) => {
            send({ type: "SET", count: event.target.value });
          }}
          value={current.context.count}
        />
        count state : {current.context.count}
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
        <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
        <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
        <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
        <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button> <Button onClick={() => send({ type: "INC" })}>INC</Button>
        <Button onClick={() => send({ type: "DEC" })}>DEC</Button>
      </Stack>
    </>
  );
}

export default StartXState;
