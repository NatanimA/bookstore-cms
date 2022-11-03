import React from 'react';

const AddBook = () => (
  <form>
    <h1 className="form-header">Add New Book</h1>
    <div className="form-control-container">
      <input className="form-input" type="text" placeholder="Book title" />
      <select className="form-select">
        <option>Action</option>
        <option>Drama</option>
        <option>Adventure</option>
      </select>
      <button type="submit" className="form-btn">ADD BOOK</button>
    </div>

  </form>
);

export default AddBook;
