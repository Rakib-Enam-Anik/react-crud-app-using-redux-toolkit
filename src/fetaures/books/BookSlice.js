const initialBooks = {
    books : [
        {id: 1, title: "Birth of Bangladesh", author: "Rakib Enam"},
        {id: 2, title: "Nondito Noroke", author: "Humayun Ahmed"},
        {id: 3, title: "Sesher kobita", author: "Robindronath Thakur"},
        {id: 4, title: "Agnibina", author: "Kazi Nazrul Islam"}
    ],
};

export const booksSlice = createSlice(
    {
        initialState: initialBooks,
        reducers: {
            showBooks: (state) => state,
        }
        
    }
);

export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;