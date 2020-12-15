import React from "react";

export default function Review() {
  return (
    <div className="review-container">
      <h1>REVIEW [0]</h1>
      <h1 className="add-review">ADD A REVIEW</h1>

      <form>
        <div className="review-input">
          {" "}
          <input placeholder="NAME *" />
          <input placeholder="EMAIL *" />
          <input placeholder="PHOTO" />
        </div>
        <textarea placeholder="COMMENT" />
        <button>Submit</button>
      </form>
    </div>
  );
}
