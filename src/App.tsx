import "./App.css";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack gap={"10px"}>
        <Link to={`/playground/ex-01-start-xstate`}>
          <Button>start-xstate</Button>
        </Link>
        <Link to={`/playground/ex-02-what-is-actor`}>
          <Button>what-is-actor</Button>
        </Link>
      </Stack>
    </>
  );
}

export default App;
