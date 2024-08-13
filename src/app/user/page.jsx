"use client";

import {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";

import {getAllUsersService} from "productWeb/services/users";

export default function UsersPage() {
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    users === null && getAllUsers();
  }, []);
  
  const getAllUsers = () => {
    getAllUsersService()
      .then(response => {
        if (response) {
          console.log(response.data);
          setUsers(response.data);
        }
      }).catch(err => console.log(err));
  };
  
  return (
    <ListGroup>
      {
        users && users.length > 0 &&
        users.map(user => {
          return (<ListGroup.Item key={user.id} action href="#link2">
            {user.first_name} {user.last_name}
          </ListGroup.Item>)
        })
      }
    </ListGroup>
  );
}