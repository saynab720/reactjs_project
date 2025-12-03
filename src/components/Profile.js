import React, { useState } from "react";
import Post from "../components/Post";

const Profile = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    bio: "Web Developer. Tech Enthusiast. Coffee Lover.",
    profilePicture: "https://via.placeholder.com/150",
  };

  // Dummy posts by the user
  const userPosts = [
    { id: 1, content: "Loving the React journey! 🚀", likes: 15 },
    { id: 2, content: "Here's my latest blog post on JavaScript tips!", likes: 30 },
    { id: 3, content: "Had an amazing coffee today ☕", likes: 8 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Profile Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src={user.profilePicture}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: "20px" }}
        />
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>

      {/* User's Posts */}
      <h3>{user.name}'s Posts</h3>
      <div>
        {userPosts.length > 0 ? (
          userPosts.map((post) => <Post key={post.id} content={post.content} likes={post.likes} />)
        ) : (
          <p>No posts yet. Stay tuned!</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
