"use client";

import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBlog = ({ id }) => {
  const [valid, setValid] = useState(false);
  function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  let data = getCookie("user_Session");
  let valid_id;
  if(data){
    data = JSON.parse(data);
    valid_id = data._id;
  }


  const notify = () => {
    if(valid_id!=id){
      toast.info("Coming soon!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }  
  };
  return (
    <>
    
    <button onClick={notify}>
      <div className="btn btn-lg btn-warning mt-5">
        <FaBook />
        <p>Update</p>
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={true}
          theme="colored"
        />
      </div>
    </button>
    </>
  );
};

export default UpdateBlog;
