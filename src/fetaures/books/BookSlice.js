const { createSlice } = require("@reduxjs/toolkit");

const { v4: uuidv4 } = require("uuid");

const initialBooks = {
    books : [
        {id: uuidv4(), title: "Birth of Bangladesh", author: "Rakib Enam"},
        {id: uuidv4(), title: "Nondito Noroke", author: "Humayun Ahmed"},
        {id: uuidv4(), title: "Sesher kobita", author: "Robindronath Thakur"},
        {id: uuidv4(), title: "Agnibina", author: "Kazi Nazrul Islam"}
    ],
};

export const booksSlice = createSlice(
    {
        initialState: initialBooks,
        reducers: {
            showBooks: (state) => state,
            addBook: (state, action) => {
                state.books.push(action.payload);
            },
            updateBook: (state, action) => {
                const {id, title, author} = action.payload
                const isBookExist = state.books.filter((book)=> book.id === id)
                if(isBookExist){
                    isBookExist[0].title = title;
                    isBookExist[0].author = title;
                }
            },
            deleteBook: (state, action) => {
                const id = action.payload;
                state.books = state.books.filter((book) => book.id !== id);
            },
        },
        
    }
);

export const {showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;