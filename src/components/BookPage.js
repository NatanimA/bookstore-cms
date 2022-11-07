import React from 'react';
import AddBook from './AddBook';
import BooksList from './BookList';

const BookPage = () => (
  <div className="book-page-container">
    <BooksList />
    <AddBook />
  </div>
);

export default BookPage;
