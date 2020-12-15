import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useForm } from "./useForm";

export default function Review() {
  const {
    inputChangeHandler,
    formState,
    submitHandler,
    removeComment,
    review,
  } = useForm();

  return (
    <div className="review-container">
      <h1>REVIEW [{review.length}]</h1>
      {review.map((comment) => {
        return (
          <div className="review-comment" key={comment.id}>
            <img src={comment.photo} alt="" />

            <div className="comment-text">
              <h4>{comment.name}</h4>
              <span onClick={() => removeComment(comment.id)}>
                <AiFillCloseSquare
                  style={{ color: "orange", cursor: "pointer" }}
                />
              </span>
              <h5 style={{ color: "black" }}>{comment.email}</h5>
              <h5>{comment.date}</h5>
              <h6>{comment.comment}</h6>
            </div>
          </div>
        );
      })}
      <h1 className="add-review">ADD A REVIEW</h1>

      <form onSubmit={submitHandler}>
        <div className="review-input">
          {" "}
          <input
            type="text"
            placeholder="NAME *"
            value={formState.name}
            name="name"
            onChange={inputChangeHandler}
          />
          <input
            type="text"
            placeholder="EMAIL *"
            value={formState.email}
            name="email"
            onChange={inputChangeHandler}
          />
          <input
            type="text"
            placeholder="PHOTO"
            value={formState.photo}
            name="photo"
            onChange={inputChangeHandler}
          />
        </div>
        <textarea
          type="text"
          placeholder="COMMENT"
          value={formState.comment}
          name="comment"
          onChange={inputChangeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
