import React from "react";
import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Typography variant="h1"> Lets Start</Typography>
      <Button
        size="large"
        variant="contained"
        sx={{ textTransform: "capitalize" }}
      >
        Start
      </Button>
    </React.Fragment>
  );
}

export default App;
