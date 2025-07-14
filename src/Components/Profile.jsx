import React from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("data");
    navigate("/login");
  };
  const lsdata = localStorage.getItem("data");

  const data = JSON.parse(lsdata);
  return (
    <div className="w-3/4 mx-auto flex flex-col justify-center ">
      <div className="flex  flex-col  text-center items-center ">
        <img src={data.image} alt="Dp" className="rounded-full mt-10 w-28" />
        <p>
          {data.firstName} {data.lastName}
        </p>
        <p className="text-[#bab9ba]">{data.email}</p>
      </div>
      <div>
        <button className="bg-[#f6f6f6] w-full py-3 rounded-lg mt-7">
          Edit Profile
        </button>
        <button className="bg-[#f6f6f6] w-full py-3 rounded-lg mt-7">
          About Us
        </button>
        <button className="bg-[#f6f6f6] w-full py-3 rounded-lg mt-7">
          Privacy Policy
        </button>
        <button className="bg-[#f6f6f6] w-full py-3 rounded-lg mt-7">
          Settings
        </button>
        <button
          className="bg-[#f6f6f6] w-full py-3 rounded-lg mt-7 text-[#dcbc85]"
          onClick={handlelogout}
        >
          Log out
        </button>
        <button className="bg-[#ff3b30] w-full py-3 rounded-lg mt-7 text-white">
          Delete Acount
        </button>
      </div>
    </div>
  );
};

export default Profile;
