const CHECK_STATUS = 'bookstore-cms/categories/CHECK_STATUS';

const initialState = '';

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_STATUS:
      return payload;

    default:
      return state;
  }
};

export default reducer;
