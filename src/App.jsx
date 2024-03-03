import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Typography variant="h1"> Lets Start</Typography>
      <Button
        disableElevation
        onClick={() => navigate("/users")}
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
