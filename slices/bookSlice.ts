import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";

type Book = {
  id: string;
  title: string;
  author: string;
};

type initialState = {
  books: Book[];
};






const initialState: initialState = {
  books: [
    { id: uuidv4(), title: "new programmar", author: "john smith" },
    { id: uuidv4(), title: "Connecting the dot", author: "john lilly" },
    
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action: PayloadAction<Book[]>) => {
      state.books.push(action.payload);
      toast.success("New Book Added");
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
        toast.info("Book Updated");
      }
    },
    deleteBook: (state, action: PayloadAction<Book>) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
      toast.warn("Book Deleted");
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;

export const getAllBooks = (state: RootState) => state.books;
export default booksSlice.reducer;
