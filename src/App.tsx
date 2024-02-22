import "./App.css";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import { Button, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack gap={"10px"}>
        <Link to={`/playground/start-xstate`}>
          <Button>start-xstate</Button>
        </Link>
        <Link to={`/`}>
          <Button disabled>coming</Button>
        </Link>
      </Stack>
    </>
  );
}

export default App;
