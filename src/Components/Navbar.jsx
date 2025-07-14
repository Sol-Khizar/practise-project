import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCirclePlus,
  faHamburger,
  faHouse,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Navbar = ({ AddTodos, form, setForm, searchQuery, setSearchQuery }) => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchInput, setSearchInput] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const lsdata = localStorage.getItem("data");

  const data = JSON.parse(lsdata);
  return (
    <div>
      <div className="md:flex justify-around bg-white  shadow-lg py-3 items-center relative hidden">
        <div className="hidden md:flex gap-4 text-[#5d5d5d] items-center">
          <Link to="/">
            <div className="flex items-center text-sm gap-1.5">
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </div>
          </Link>
          <Link onClick={() => setOpen(!open)}>
            <div className="flex items-center text-sm gap-1.5">
              <FontAwesomeIcon icon={faCirclePlus} />
              <span>Add Task</span>
            </div>
          </Link>

          <Link to="/tasks">
            <div className="flex items-center text-sm gap-1.5">
              <FontAwesomeIcon icon={faCheck} />
              <span>Tasks</span>
            </div>
          </Link>
        </div>
        <div className=" bg-[#f6f6f6] rounded-3xl flex items-center md:w-2/5 w-3/4">
          <span className="rounded-tl-full  px-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            className="w-full px-1 py-3  rounded-3xl focus:outline-none"
            placeholder="Search for your task"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className=" items-center gap-10 hidden md:flex ">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
          <Link to="/profile">
            <img src={data?.image} alt="Dp" className="rounded-full w-5" />
          </Link>
        </div>
        <div className="block md:hidden">
          <FontAwesomeIcon icon={faHamburger} onClick={() => setMenu(!menu)} />
        </div>

        {menu && (
          <div className="bg-[#f6f6f6] absolute top-12 right-3 px-5 py-4 rounded-xl flex flex-col gap-y-5 w-3/5 ">
            <Link to="/" onClick={() => setMenu(!menu)}>
              <div className="flex items-center text-sm gap-1.5 ">
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </div>
            </Link>
            <Link
              onClick={() => {
                setOpen(!open);
                setMenu(!menu);
              }}
            >
              <div className="flex items-center text-sm gap-1.5">
                <FontAwesomeIcon icon={faCirclePlus} />
                <span>Add Task</span>
              </div>
            </Link>

            <Link to="/tasks" onClick={() => setMenu(!menu)}>
              <div className="flex items-center text-sm gap-1.5">
                <FontAwesomeIcon icon={faCheck} />
                <span>Tasks</span>
              </div>
            </Link>
            <div
              className="flex items-center text-sm gap-1.5"
              onClick={() => setMenu(!menu)}
            >
              <FontAwesomeIcon icon={faBell} className="text-xl" />
              <span>Notifications</span>
            </div>
            <Link
              to="/profile"
              className="flex items-center text-sm gap-1.5 "
              onClick={() => setMenu(!menu)}
            >
              <img src={data?.image} alt="Dp" className="rounded-full w-5" />
              <span>Profile</span>
            </Link>
          </div>
        )}

        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in "
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <div className="flex justify-between px-3 py-2">
                  <div></div>
                  <span className="text-center">Add Task</span>
                  <FontAwesomeIcon
                    icon={faX}
                    onClick={() => setOpen(false)}
                    className="text-end"
                  />
                </div>

                <div className="flex flex-col items-center w-full mb-5  bg-[#f6f6f6]">
                  <div className="w-4/5 ">
                    <label
                      htmlFor="title"
                      className="block mb-1 text-left px-1 text-xs"
                    >
                      Task Title
                    </label>
                    <input
                      type="text"
                      placeholder="eg: Buy a Bike"
                      id="title"
                      name="title"
                      className="w-full px-2 py-1 border rounded"
                      onChange={onChange}
                      value={form.title}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center w-full mb-5  bg-[#f6f6f6]">
                  <div className="w-4/5 ">
                    <label
                      htmlFor="description"
                      className="block mb-1 text-left px-1 text-xs"
                    >
                      Task Description
                    </label>
                    <textarea
                      className="w-full px-2 py-1 border rounded"
                      name="desc"
                      onChange={onChange}
                      value={form.desc}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center w-full mb-5  bg-[#f6f6f6]">
                  <div className="w-4/5 ">
                    <label
                      htmlFor="date"
                      className="block mb-1 text-left px-1 text-xs"
                    >
                      Task Date
                    </label>
                    <input
                      type="date"
                      placeholder="eg: Buy a Bike"
                      id="date"
                      name="date"
                      onChange={onChange}
                      value={form.date}
                      className="w-full px-2 py-1 border rounded mb-5"
                    />
                    <div className="flex justify-between">
                      <label htmlFor="priority">Set As Priority</label>
                      <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            priority: e.target.checked,
                          }))
                        }
                        checked={form.priority}
                      />
                    </div>
                    <button
                      className="w-full py-2 text-white bg-[#f7a72a] mt-5 rounded-xl"
                      onClick={() => {
                        AddTodos();
                        setOpen(!open);
                      }}
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>

      <div className="md:hidden flex items-center justify-between px-4 py-2   fixed top-0 bg-white w-full">
        <Link to="/profile">
          <img
            src={data?.image}
            alt="Dp"
            className="rounded-full w-7 h-7 object-cover"
          />
        </Link>

        <div
          className={`flex-1 mx-3 transition-all duration-300 ${
            searchInput
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <input
            type="text"
            placeholder="Search task"
            className="w-full px-3 py-2 text-sm rounded-full border focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => setSearchInput(!searchInput)}
            className="cursor-pointer text-gray-600"
          />
          <FontAwesomeIcon icon={faBell} className="text-lg text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
