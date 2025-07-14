import {
  faCheck,
  faCirclePlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex md:hidden justify-evenly w-full mt-6 fixed  bottom-0 bg-white py-4">
      <Link
        to="/"
        className={`${
          currentPath === "/home"
            ? "text-[#edc075] font-bold underline"
            : "text-gray-600"
        } `}
      >
        <div className="flex flex-col items-center text-sm gap-1.5">
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </div>
      </Link>

      <Link
        to="/Add-Tasks"
        className={`${
          currentPath === "/Add-Tasks"
            ? "text-[#edc075] font-bold underline"
            : "text-gray-600"
        }`}
      >
        <div className="flex flex-col items-center text-sm gap-1.5">
          <FontAwesomeIcon icon={faCirclePlus} />
          <span>Add Task</span>
        </div>
      </Link>

      <Link
        to="/tasks"
        className={`${
          currentPath === "/tasks"
            ? "text-[#edc075] font-bold underline"
            : "text-gray-600"
        }`}
      >
        <div className="flex  flex-col items-center text-sm gap-1.5">
          <FontAwesomeIcon icon={faCheck} />
          <span>Tasks</span>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
