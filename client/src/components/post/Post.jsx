// YourComponent.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css"; // Import the CSS file

export const Post = ({ post, index }) => {
  const PF = "http://localhost:5000/images";

  // Use local storage to store the checkbox state
  const [completed, setCompleted] = useState(
    localStorage.getItem(`taskCompleted_${post._id}`) === "true"
  );

  // Handle checkbox state change
  const handleCheckboxChange = () => {
    const updatedCompleted = !completed;
    setCompleted(updatedCompleted);
    localStorage.setItem(`taskCompleted_${post._id}`, updatedCompleted);
  };

  useEffect(() => {
    // Handle task numbering
    const taskNumber = index + 1;
    localStorage.setItem(`taskNumber_${post._id}`, taskNumber);
  }, [index, post._id]);

  return (
    <div className="post">
      {/* Add task numbering */}
      <b className="postDesc">Task No:{index + 1}</b>
      <div className="postInfo">
        <Link to={`/Todo-App/post/${post._id}`} className="postTitle">
          {post.title}
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">Due-Date: {post.desc}</p>

      {/* Add a checkbox for task completion */}
      <label className="checkboxContainer">
        Done
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
