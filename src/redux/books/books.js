import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Game of thrones', author: 'Suad', category: 'Adventure', complete: '60%', currentChapter: 'Chapter:8', id: uuidv4(),
  },
  {
    title: 'Hunger Games', author: 'Hayet', category: 'Romance', complete: '10%', currentChapter: 'Introduction', id: uuidv4(),
  },
  {
    title: 'The Secret', author: 'Natanim', category: 'Drama', complete: '40%', currentChapter: 'Going with the wind', id: uuidv4(),
  },
  {
    title: 'Gone with the wind', author: 'Doni', category: 'Action', complete: '90%', currentChapter: 'Chapter:10', id: uuidv4(),
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_BOOK:
      return [
        ...state, payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== id);

    default:
      return state;
  }
};

export default reducer;
