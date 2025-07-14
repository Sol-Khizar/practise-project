import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Todo = ({
  id,
  title,
  task,
  date,
  priority,
  handleComplete,
  completed,
  updateTodo,
  deleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: title !== undefined ? title : "",
    desc: task !== undefined ? task : "",
    date: date !== undefined ? date : "",
  });

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateTodo(id, {
      title: editForm.title,
      desc: editForm.desc,
      date: editForm.date,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-[#f6f6f6] w-full px-3 py-2 overflow-hidden rounded-2xl shadow-xl">
      <div className="flex items-center justify-between gap-7">
        <div className="mb-5">
          {isEditing ? (
            <>
              <input
                type="text"
                name="title"
                value={editForm.title}
                onChange={handleChange}
                className="border p-1 rounded w-full mb-2"
              />
              <input
                type="text"
                name="desc"
                value={editForm.desc}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            </>
          ) : (
            <>
              <h1 className="text-[#2d2d2d]">{title}</h1>
              <h2 className="text-[#aeaeae]">{task}</h2>
            </>
          )}
        </div>
        <div className="flex flex-col items-center md:flex-row gap-y-2">
          {isEditing ? (
            <button
              className=" px-3 py-1 text-black rounded cursor-pointer"
              onClick={handleSave}
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          ) : (
            <>
              <button disabled={completed}>
                <FontAwesomeIcon
                  icon={faPen}
                  className={`${
                    completed ? "cursor-not-allowed" : "cursor-pointer"
                  } mx-4`}
                  onClick={() => setIsEditing(true)}
                />
              </button>
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer"
                onClick={() => deleteTodo(id)}
              />
            </>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        {isEditing ? (
          <input
            type="date"
            name="date"
            value={editForm.date}
            onChange={handleChange}
            className="border p-1 rounded"
          />
        ) : (
          <p className="text-sm">{date}</p>
        )}
        <div
          className={`${
            completed ? "text-green-500 line-through" : "text-black"
          } ${
            isEditing ? "cursor-not-allowed" : "cursor-pointer"
          } flex items-center gap-2`}
        >
          <label htmlFor={`complete-${id}`} className="text-sm">
            Mark as Completed
          </label>
          <input
            type="checkbox"
            id={`complete-${id}`}
            checked={completed}
            onChange={() => handleComplete(id)}
            disabled={isEditing}
          />
        </div>
      </div>

      <p
        className={`${
          priority ? "text-red-800" : "text-green-900"
        } text-center text-xl mt-4`}
      >
        {priority ? "High Priority" : "Low Priority"}
      </p>
    </div>
  );
};

export default Todo;
