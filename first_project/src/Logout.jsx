import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className="button">
      <button onClick={handleLogout} id="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;
