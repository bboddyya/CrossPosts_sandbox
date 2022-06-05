import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function CreditButton() {
  return (
    <div className="credit header-link">
      <Link to="/credit">POST!</Link>
    </div>
  );
}

export default CreditButton;
