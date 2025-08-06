import React, { useState } from "react";
import UserForm from "./UserForm"; 
import UserTable from "./UserTable";
import "./styles.css";

const CrudApp = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

return (
  <div className="crud-app-container">
    <h1>React Simple CRUD App</h1>
    <UserForm onAdd={addUser} onUpdate={updateUser} editingUser={editingUser} />
    <UserTable users={users} onDelete={deleteUser} onEdit={editUser} />
  </div>
);
};

export default CrudApp;
