// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import BookForm from './BookForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Redux Book Store</h1>
        <Routes>
          <Route path="/book" element={<BookList />} />
          <Route path="/categories" element={<div>Categories Page</div>} />
        </Routes>
        <BookList />
        <BookForm />
      </div>
    </Router>
  );
};

export default App;
