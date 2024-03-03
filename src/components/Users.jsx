import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import  Axios  from "axios";

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect (() => {
    getUsers();
  },[]);

  const getUsers = () => {
      Axios.get('http://localhost:3001/api/users')
      .then(response => {
        console.log(response.data.response)
        setUsers(response.data.response)
      })
  }

  return (
    <React.Fragment>
      <UserForm />
      <UserTable rows={users}/>
    </React.Fragment>
  );
};

export default Users;
