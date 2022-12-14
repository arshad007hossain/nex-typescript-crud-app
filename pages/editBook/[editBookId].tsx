import React, { useState} from "react";
import { useRouter } from "next/router";
import { useDispatch} from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllBooks, updateBook} from "../../slices/bookSlice";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

const EditBook = () => {

  const AllBooks = useAppSelector(getAllBooks);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const router = useRouter();
  let editBookId = router.query.editBookId
  console.log(editBookId);
  //return;
  let singlebook='';
   AllBooks['books'].map((x)=>{
    if(editBookId==x.id){
      singlebook=x;
    }
  } 
  )

  //const singlebook = AllBooks['books'];
  
  console.log(singlebook)

  const onSubmit = (e) => {
    let data={'id':singlebook['id'],...e};
    console.log(data)
    dispatch(updateBook(data));
    router.push("/showBooks");
  };
  return (
    
    <div>
      <ToastContainer/>
      <h1 className="text-center">Edit Book</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              // value={singlebook['title']}
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
              // value={singlebook['author']}
              className="form-control"
            />
            {errors.author?.type === "required" && "Author  is required" && (
        <p style={{ color: "red" }}>Author is Required.</p>
    )}
          </div>

          <button type="submit" className="btn btn-primary">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
