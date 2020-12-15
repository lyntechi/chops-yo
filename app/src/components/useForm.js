import { useState } from "react";

export const useForm = () => {
  const [review, setReview] = useState([
    {
      id: 1,
      name: "lynda",
      date: Date(),
      email: "lyndasantiag@gmail.com",
      photo: "https://i.imgur.com/FRuTZJc.jpg",
      comment:
        "This was delicious. My husband and I were very impressed. I highly recommend this restaurant to anyone looking for a lot of diff options in menus.",
    },
    {
      id: 2,
      name: "Bob",
      date: Date(),
      email: "Bob@email.com",
      photo:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      comment:
        "WOW! This was really really good compared to all other restaurant's I have tried in the past weeks. The flavor was very tasty. I can see myself coming back to this restaurant.",
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
  const newComment = {
    id: Date.now(),
    name: formState.name,
    email: formState.email,
    photo: formState.photo,
    comment: formState.comment,
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setReview([...review, newComment]);
    alert("Comment Will be added");
    setFormState({ name: "", email: "", photo: "", comment: "" });
  };

  const removeComment = (id) => {
    const remove = review.filter((item) => {
      return item.id !== id;
    });
    setReview(remove);
  };

  return {
    inputChangeHandler,
    formState,
    setFormState,
    submitHandler,
    removeComment,
    review,
  };
};
