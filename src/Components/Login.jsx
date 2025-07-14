import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faApple,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30,
        }),
      });

      const data = await res.json();
      if (data.accessToken) {
        setUser(data);
        localStorage.setItem("data", JSON.stringify(data));

        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div className="flex flex-col justify-around items-center min-h-screen bg-[#f6f6f6]">
      <h1 className="text-4xl text-center mb-5 hidden md:block">
        {" "}
        <span className="text-[#f7a72a]  ">Todo</span> Now
      </h1>
      <div className="bg-[#f6f6f6] flex flex-col w-full md:w-1/4   mx-auto items-center text-[#a2a2a2]  justify-around h-96 rounded-lg px-5 md:px-0">
        <h2 className="text-2xl text-[#4a4a4a]">Login to your account</h2>

        <div className="w-full">
          <div className="flex flex-col items-center w-full mb-5  ">
            <div className="w-full md:w-4/5">
              <label
                htmlFor="username"
                className="block mb-1 text-left px-1 text-xs"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="eg: emmanuel.com"
                id="username"
                className="w-full px-2 py-2 border rounded-lg bg-white border-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="w-full md:w-4/5">
              <label
                htmlFor="password"
                className="block mb-1 text-left px-1 text-xs"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="************"
                id="password"
                className="w-full px-2 py-2 border rounded-lg bg-white  border-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className=" block text-end text-[#f7a72a] text-sm mt-2">
                Forgot password?
              </span>
            </div>
          </div>
        </div>

        <button
          className="w-full md:w-4/5 bg-[#f7a72a] text-white py-3 rounded-lg px-5 md:px-0"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="mt-5">
        <p className="uppercase text-center text-xs text-[#bcbcbc] mb-5">
          or signup with
        </p>

        <div className="flex space-x-4 text-2xl text-gray-700 justify-center space-y-4 ">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="hover:text-blue-600 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faApple}
            className="hover:text-black cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faGoogle}
            className="hover:text-red-600 cursor-pointer text-[#4285F4]"
          />
        </div>
        <p>
          Already have an account <span className="text-[#f7a72a]">Login?</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
