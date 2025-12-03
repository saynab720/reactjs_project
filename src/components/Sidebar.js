import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
