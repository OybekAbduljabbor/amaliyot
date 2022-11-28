import React from "react";
import "./Login.css";
import { acAdmin } from "../../Redux/Admin";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div id="login">
      <form
        id="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          const foromData = new FormData();
          foromData.append("username", e.target.username.value);
          foromData.append("password", e.target.password.value);

          axios("https://task.samid.uz/v1/user/sign-in", {
            method: "POST",
            data: foromData,
          })
            .then(async (res) => {
              localStorage.setItem("admin", JSON.stringify(res.data));
              dispatch(acAdmin(res.data));
              navigate("/");
            })
            .catch((err) => {
              console.log(err.response.data);
            });
        }}
      >
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
