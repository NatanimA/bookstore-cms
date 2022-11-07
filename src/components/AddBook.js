import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
    category: '',
  });

  const changeHandler = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
      category: inputText.category,
    };
    dispatch(addBook(newBook));
    setInputText({
      title: '',
      author: '',
      category: '',
    });
  };

  return (

    <form onSubmit={submitHandler}>
      <h1 className="form-header">Add New Book</h1>
      <div className="form-control-container">

        <input
          key="title-input"
          name="title"
          value={inputText.title}
          onChange={changeHandler}
          className="form-input"
          type="text"
          placeholder="Book title"
        />

        <input
          type="text"
          name="author"
          key="author-input"
          placeholder="Book author"
          value={inputText.author}
          onChange={changeHandler}
        />

        <select
          name="category"
          key="book-category"
          onChange={changeHandler}
          value={inputText.category}
          className="form-select"
        >
          <option value="" hidden>Category</option>
          <option value="Action">Action</option>
          <option name="category">Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Inspiration">Inspiration</option>
          <option value="Business">Business</option>
        </select>
        <button type="submit" className="form-btn">ADD BOOK</button>
      </div>

    </form>
  );
};

export default AddBook;
