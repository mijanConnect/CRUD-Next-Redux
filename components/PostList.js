"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPosts, removePost } from "../redux/posts/postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDelete = (id) => dispatch(removePost(id));
  const handleEdit = (post) => {
    const newTitle = prompt("Update title:", post.title);
    if (newTitle)
      dispatch(editPost({ id: post.id, data: { ...post, title: newTitle } }));
  };

  return (
    <ul>
      {items.map((post) => (
        <li className="py-1" key={post.id}>
          {post.title}
          <button
            className="bg-blue-500 px-4 py-1 ml-4"
            onClick={() => handleEdit(post)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 px-4 py-1 ml-4"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
