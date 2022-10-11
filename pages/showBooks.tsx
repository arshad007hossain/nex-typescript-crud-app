import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { deleteBook, getAllBooks } from "../slices/bookSlice";

const BooksView = () => {
  const router = useRouter()
  const AllBooks = useAppSelector(getAllBooks);
  // const count = useAppSelector(selectCount);
  // const numberOfBooks = useAppSelector((state) => state
  const dispatch = useAppDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2 className="text-center">List of Books</h2>
      {/* <h2>There are {numberOfBooks} Books</h2> */}
      <table className="table table-striped table-border w-50 align-center m-auto">
        <thead  className="text-center">
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {AllBooks.books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id}>
                {/* <td>{id}</td> */}
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link href={`/editBook/{id}`}>
                  <button className="btn btn-primary mx-2">Edit</button>
                  </Link>
                  <button className="btn btn-info"
                    onClick={() => {
                      handleDeleteBook(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
