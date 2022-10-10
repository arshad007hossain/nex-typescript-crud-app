import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../hooks";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addBook } from "../slices/bookSlice";
import { useDispatch } from "react-redux";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = ({ title, author }) => {
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    router.push("/showBooks");
  };

  return (
    <div>
      <ToastContainer/>
      <h2 className="text-center">Add Books</h2>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              className="form-control"
            />
            {errors.title?.type === "required" && "Title is required" && (
        <p style={{ color: "red" }}>Title is Required.</p>
    )}
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Author
            </label>
            <input
              {...register("author", { required: "Author is required" })}
              type="text"
              className="form-control"
            />
            {errors.author?.type === "required" && "Author  is required" && (
        <p style={{ color: "red" }}>Author is Required.</p>
    )}
          </div>

          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

