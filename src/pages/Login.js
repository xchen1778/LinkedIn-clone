import React, { useState, useContext, useEffect } from "react";
import "../css/Login.css";
import UserContext from "../contexts/user.context";

function Login() {
  const { name, setName, photoUrl, setPhotoUrl, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [isEmpty, setIsEmpty] = useState(false);
  const login = (e) => {
    e.preventDefault();
    if (name) {
      setIsLoggedIn(true);
      window.localStorage.setItem("user", JSON.stringify(name));
      window.localStorage.setItem("photo", JSON.stringify(photoUrl));
    } else {
      setIsEmpty(true);
    }
  };

  useEffect(() => {
    document.title = "LinkedIn Login";
  }, []);

  return (
    <div className="login-page">
      <a href="" className="linkedin-logo">
        <img className="linkedin-logo-image" src="/logo.png" />
      </a>
      <div className="login">
        <div className="login-header">
          <h2 className="login-title">Sign in</h2>
          <p className="login-text">Stay updated on your professional world</p>
        </div>
        <form>
          <div className="name-input">
            <input
              required
              placeholder="Name"
              type="text"
              value={name}
              id="name"
              onChange={(e) => {
                e.target.value ? setIsEmpty(false) : setIsEmpty(true);
                setName(e.target.value);
              }}
              className={isEmpty && "empty-input"}
            />
            <label className="name-label" htmlFor="name">
              Name<span>*</span>
            </label>
          </div>
          <div className="photo-input">
            <input
              placeholder="Photo Url"
              type="text"
              value={photoUrl}
              id="photoUrl"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
            <label className="photoUrl-label" htmlFor="photoUrl">
              Photo Url (optional)
            </label>
          </div>
          <div className="password-input">
            <input
              placeholder="Password"
              type={showPassword}
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="password-label" htmlFor="password">
              Password (optional)
            </label>
            {showPassword === "password" ? (
              <p
                className="show-button"
                onClick={() => {
                  setShowPassword("text");
                }}
              >
                show
              </p>
            ) : (
              <p
                className="hide-button"
                onClick={() => {
                  setShowPassword("password");
                }}
              >
                hide
              </p>
            )}
          </div>

          <button type="submit" onClick={login}>
            Sign In
          </button>
        </form>
      </div>

      <div className="login-footer">
        <img src="https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-noir.png" />
        <span>&copy; 2022</span>
      </div>
    </div>
  );
}

export default Login;
