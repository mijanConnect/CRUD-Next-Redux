"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/posts/postSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body: "Sample body" }));
    setTitle("");
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        className="bg-gray-500 py-1 px-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <button className="bg-green-500 px-4 py-1 ml-4" type="submit">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
