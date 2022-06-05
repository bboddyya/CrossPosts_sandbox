import React, { useContext } from "react";
import { Context } from "../../Context";
import "./Profile.css";

function Profile() {
  const { name, setName } = useContext(Context);

  return (
    <div className="profileWrapper">
      <div className="avatar">
        <span className="lnr lnr-user"></span>
      </div>
      <div className="inputWrapper">
        <input
          placeholder="What is your name?"
          className="nameInput"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="check">
          <span className="lnr lnr-checkmark-circle"></span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
