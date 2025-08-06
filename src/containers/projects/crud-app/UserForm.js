import React, { useState, useEffect } from 'react';

const UserForm = ({ onAdd, onUpdate, editingUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!name || !email) {
      console.log("Please enter both name and email."); 
      return;
    }

    if (editingUser) {
      onUpdate({ ...editingUser, name, email });
    } else {
      onAdd({ name, email });
    }

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required 
      />{' '}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required 
      />{' '}
      <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
