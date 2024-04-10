"use client";
import React from "react";
import { FaBook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBlog = ({ id }) => {
  const notify = () => {
    toast.promise("Coming soon!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <button onClick={notify}>
      <div className="btn btn-lg btn-warning mt-5">
        <FaBook />
        <p>Update</p>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="colored"
        />
      </div>
    </button>
  );
};

export default UpdateBlog;
