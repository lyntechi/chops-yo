import React from "react";

export default function Review() {
  return (
    <div className="review-container">
      <h1 className="review-h1">REVIEW [0]</h1>
      <h1 className="add-review">ADD A REVIEW</h1>

      <form className="review-form">
        <div className="review-input">
          {" "}
          <input className="review-input-border" placeholder="NAME *" />
          <input className="review-input-border" placeholder="EMAIL *" />
          <input className="review-input-border" placeholder="PHOTO" />
        </div>
        <textarea className="review-textarea" placeholder="COMMENT" />
        <button className="review-submit">Submit</button>
      </form>
    </div>
  );
}
