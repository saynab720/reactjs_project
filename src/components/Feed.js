import React from "react";
import Post from "./Post";

const Feed = () => {
  // Dummy data for posts
  const posts = [
    { id: 1, content: "Just had a great day! 😃", likes: 12 },
    { id: 2, content: "Check out this amazing view 🌄", likes: 25 },
    { id: 3, content: "Learning React is so much fun! 🚀", likes: 18 },
  ];

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} content={post.content} likes={post.likes} />
        ))
      ) : (
        <p>No posts available. Be the first to share something!</p>
      )}
    </div>
  );
};

export default Feed;
