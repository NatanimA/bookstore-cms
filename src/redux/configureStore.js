import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({ bookReducer: booksReducer, categoriesReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
