import React from "react";

const Post = ({ content, likes }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
      <p>{content}</p>
      <small>Likes: {likes}</small>
    </div>
  );
};

export default Post;
