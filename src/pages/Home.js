import React from "react";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Welcome Section */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1>Welcome to Social App</h1>
        <p>Connect with friends, share updates, and explore trending topics!</p>
      </div>

      {/* Feed Section */}
      <h2>Latest Posts</h2>
      <Feed />
    </div>
  );
};

export default Home;
