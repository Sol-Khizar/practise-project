import React from "react";

const AddTaskmobile = ({ AddTodos, form, setForm }) => {
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="">
      <div className="flex flex-col items-center w-full    ">
        <div className="w-4/5 ">
          <label htmlFor="title" className="block mb-1 text-left px-1 text-xs">
            Task Title
          </label>
          <input
            type="text"
            placeholder="eg: Buy a Bike"
            id="title"
            className="w-full px-2 py-1 border rounded"
            name="title"
            onChange={onChange}
            value={form.title}
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-5 ">
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
      <div className="flex flex-col items-center w-full mb-5 ">
        <div className="w-4/5 ">
          <label htmlFor="date" className="block mb-1 text-left px-1 text-xs">
            Task Description
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
            className="w-full py-2 text-white bg-[#f7a72a] mt-5 rounded-xl "
            onClick={AddTodos}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskmobile;
