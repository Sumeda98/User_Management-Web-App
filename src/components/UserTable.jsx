import {
    Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function UserTable(props) {
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          
          props.rows.length > 0  ? props.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component={"th"} scope="row">
                {row.id}
              </TableCell>
              <TableCell component={"th"} scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                <Button onClick={e=>{}} sx={{textTransform:'capitalize'}}>Update</Button>
                <Button onClick={e=>{}} sx={{textTransform:'capitalize'}}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
          :
          <TableRow>
                <TableCell component={"th"} scope="row">
                No Data
              </TableCell>
          </TableRow>
          
          }
        </TableBody>
      </TableContainer>
    </React.Fragment>
  );
}

export default UserTable;
