import React from "react";
import { Link } from "react-router-dom";

function ProfileButton() {
  return (
    <div className="profileButton header-link">
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default ProfileButton;
