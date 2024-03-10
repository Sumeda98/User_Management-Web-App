import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submit, setSubmit] = useState([false]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  //get users
  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        console.log(response.data.response);
        setUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.log("Axios Error :", error);
      });
  };

  //add users
  const addUser = (data) => {
    setSubmit(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers();
        setSubmit(false);
        isEdit(false);
      })
      .catch((error) => {
        console.log("Axios Error :", error);
      });
  };

  //update user
  const updateUser = (data) => {
    setSubmit(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.put("http://localhost:3001/api/updateuser", payload)
      .then(() => {
        getUsers();
        setSubmit(false);
        isEdit(false);
      })
      .catch((error) => {
        console.log("Axios Error :", Axios);
      });
  };

  //Delete user
  const deleteUser = (data) => {
    Axios.delete("http://localhost:3001/api/deleteuser", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.log("Axios Error :", Axios);
      });
  }

  return (
    <React.Fragment>
      <UserForm
        addUser={addUser}
        submit={submit}
        updateUser={updateUser}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UserTable
        rows={users}

        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}

        deleteUser={data => window.confirm('Are You Sure?') && deleteUser(data)}
        
      />
    </React.Fragment>
  );
};

export default Users;
