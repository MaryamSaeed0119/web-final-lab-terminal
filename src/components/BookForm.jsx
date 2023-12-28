// src/components/BookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/bookSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: Date.now(), title }));
    setTitle('');
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
