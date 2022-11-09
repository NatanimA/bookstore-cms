import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';
const APP = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QEEJSPZIbd96vbphELdr/books';
const LOAD_BOOKS = 'bookstore-cms/books/LOAD_BOOKS';
const initialState = [
];

export const loadBooks = () => async (dispatch) => {
  const response = await axios.get(APP);
  const res = await response.data;
  const data = Object.entries(res).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      item_id: key,
      title,
      category,
      author,
    };
  });
  if (data) {
    dispatch({
      type: LOAD_BOOKS,
      payload: data,
    });
  }
  console.log('Response', data);
};

export const addBook = (payload) => async (dispatch) => {
  const response = await axios({
    url: APP,
    method: 'post',
    data: {
      item_id: payload.item_id,
      category: payload.category,
      author: payload.author,
      title: payload.title,
    },
  }).then(res => {
    return res
  });

  if (response.data === "Created") {
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const response = await axios.delete(`${APP}/${id}`).then( res => {
    return res
  });
  console.log("Delete Response is: ", response)
  if (response.status === 201) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

const reducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_BOOK:
      return [
        ...state, payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== id);

    case LOAD_BOOKS:
      return payload;

    default:
      return state;
  }
};

export default reducer;
