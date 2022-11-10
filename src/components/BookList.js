import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks, removeBook } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();
  const useFetching = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadBooks());
    }, [dispatch]);
  };
  useFetching();
  const bookState = useSelector((state) => state.bookReducer);

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  const bookList = bookState.map((book) => (
    <div className="book-list" key={book.item_id}>
      <div className="book-info">
        <span className="book-genre">{book.category}</span>
        <h3 className="book-name">{book.title}</h3>
        <span>{book.author}</span>
        <div className="button-container">
          <button id={book.item_id} type="button" className="button-item">Comments</button>
          <button onClick={removeHandler} id={book.item_id} type="button" className="button-item">Remove</button>
          <button id={book.item_id} type="button" className="button-item">Edit</button>
        </div>
      </div>
      <p>{book.complete}</p>
      <div className="book-chapter-info">
        <span className="current-chapter-header">CURRENT CHAPTER</span>
        <p>{book.currentChapter}</p>
        <button id={book.item_id} type="button" className="btn chapter-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  ));
  return (
    <div className="book-list-container">
      {bookList}
    </div>
  );
};

export default BooksList;
