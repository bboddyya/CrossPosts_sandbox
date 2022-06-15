import React, { useContext } from "react";
import { Context } from "../../Context";
import "./Profile.css";

function Profile() {
  const { name, setName, setLogin } = useContext(Context);

  const loginName = () => setLogin(true);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      loginName();
    }
  };
  return (
    <div className="profileWrapper">
      <div className="avatar">
        <span className="lnr lnr-user" />
      </div>
      <div className="inputWrapper">
        <input
          placeholder="What is your name?"
          className="nameInput"
          value={name}
          onChange={(e) => {
            setLogin(false);
            setName(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <div className="check">
          <span className="lnr lnr-checkmark-circle" onClick={loginName} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
