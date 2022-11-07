const CHECK_STATUS = 'bookstore-cms/books/REMOVE_BOOK';

const initialState = "";

export const checkStatus = (payload) => ({
    type: CHECK_STATUS,
    payload,
});



const reducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case CHECK_STATUS:
            state = payload;

        default:
            return state;
    }
};

export default reducer;
