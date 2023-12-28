// src/components/BookList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, removeBook } from '../redux/slices/bookSlice';
import BookForm from './BookForm';

const BookList = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
  };

  return (
    <div>
      <h2>Book List</h2>
      <button onClick={handleAddClick}>Add Book</button>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - <button onClick={() => dispatch(removeBook(book.id))}>Remove</button>
          </li>
        ))}
      </ul>

      {showAddForm && <BookForm onClose={handleFormClose} />}
    </div>
  );
};

export default BookList;
