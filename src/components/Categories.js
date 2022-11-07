import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  return (
    <div className="categories-container">
      <p>{status}</p>
      <button onClick={() => dispatch(checkStatus('Page is under construction!'))} type="submit" className="categories-btn">Check Status!</button>
    </div>

  );
};

export default Categories;
