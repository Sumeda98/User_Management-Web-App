import { Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";

const UserForm = (props) => {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');


  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#ffff",
          marginBottom: "30px",
          display: "block",
        }}
      >
        <Grid item xs={12}>
          <Typography component={"h3"} variant="h3" sx={{ color: "#000" }}>
            User Forms
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            variant="body1"
            sx={{
              mr: 2,
              width: "100px",
              display: "block",
              color: "#000",
            }}
          >
            ID
          </Typography>
          <Input
            type="number"
            id="id"
            name="id"
            sx={{ width: "400px" }}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            variant="body1"
            sx={{
              mr: 2,
              width: "100px",
              display: "block",
              color: "#000",
            }}
          >
            Name
          </Typography>
          <Input
            type="text"
            id="name"
            name="name"
            sx={{ width: "400px" }}
            value={name}
            onChange={(e) =>setName(e.target.value)}
          />
        </Grid>

        <Button
        disableElevation
          variant="contained"
          sx={{ margin: "20px", textTransform: "capitalize" }}
        >
          Submit
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default UserForm;
