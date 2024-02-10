import React from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const users = [
  { id: 1, name: "Sumedha" },
  { id: 2, name: "Sankalpa" },
];

const Users = () => {
  return (
    <React.Fragment>
      <UserForm />
      <UserTable rows={users}/>
    </React.Fragment>
  );
};

export default Users;
