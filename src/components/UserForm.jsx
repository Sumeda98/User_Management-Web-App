import { Button, Grid, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserForm = ({addUser,updateUser, submit, data, isEdit}) => {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!submit){
      setId(0);
      setName('');
    }
     },[submit]);

     
  useEffect(() => {
    if(data?.id && data.id !==0){
      setId(data.id);
      setName(data.name);
      
    }
  }, [data]);


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
        onClick={()=> isEdit? updateUser({id:id, name:name}) : addUser({id:id, name:name})}
        disableElevation
          variant="contained"
          sx={{ margin: "20px", textTransform: "capitalize" }}
        >
          {isEdit? 'Update':'Add'}
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default UserForm;
