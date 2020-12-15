import React, { useState } from "react";

export default function Review() {
  const [review, setReview] = useState([
    {
      name: "lynda",
      date: Date(),
      email: "lyndasantiag@gmail.com",
      photo: "https://i.imgur.com/FRuTZJc.jpg",
      comment:
        "This meal was delicious. My husband and I were very impressed. I highly recommend this restaurant to anyone looking for a lot of diff options in menus.",
    },
    {
      name: "Bob",
      date: Date(),
      email: "Bob@email.com",
      photo:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      comment:
        "I like how the food wasnt dry at all compared to all other restaurant's I have tried in the past weeks. The flavor was very tasty. I can see myself coming back again to eat here.",
    },
  ]);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    photo: "",
    comment: "",
  });
  const inputChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: [e.target.value] });
  };
  const newComment = (text) => {
    const commentObj = {
      id: Date.now(),
      name: text.name,
      email: text.email,
      photo: text.photo,
      comment: text.comment,
    };
    setReview([...review, commentObj]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    newComment(formState);
    alert("Comment Will be added");
    setFormState({ name: "", email: "", photo: "", comment: "" });
  };
  return (
    <div className="review-container">
      <h1>REVIEW [{review.length}]</h1>
      {review.map((comment) => {
        return (
          <div className="review-comment">
            <img src={comment.photo} alt="" />
            <div className="comment-text">
              <h4>{comment.name}</h4>
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
