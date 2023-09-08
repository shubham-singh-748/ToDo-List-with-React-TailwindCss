import React from "react";
import { useState } from "react";

const Hero = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Task, setTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setTask([...Task, { Title, Description }]);
    setTitle("");
    setDescription("");
  };

  const DeleteHandler = (i) => {
    let CopyTask = [...Task];
    CopyTask.splice(i, 1);
    setTask(CopyTask);
  };

  let RenderTask = (
    <p className="mt-[10%] px-[5%] text-2xl font-bold bg-slate-400 py-10 text-white capitalize">
      no task available
    </p>
  );

  if (Task.length > 0) {
    RenderTask = Task.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex items-center justify-between px-[5%] font-bold">
            <p className="text-2xl">{t.Title}</p>
            <p className="text-xl">{t.Description}</p>
            <button className="font-bold text-white bg-black px-5 py-2 rounded-md" onClick={()=>DeleteHandler()}>
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div>
      <form
        onSubmit={SubmitHandler}
        action=""
        className="flex items-center justify-between px-[5%] mt-[4%]"
      >
        <input
          type="text"
          placeholder="enter your title"
          className="border-2 border-black px-2 capitalize text-xl py-1 outline-none"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="enter your description"
          className="border-2 border-black px-2 text-xl capitalize py-1 outline-none"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 capitalize text-xl font-bold rounded-lg tracking-widest">
          add task
        </button>
      </form>

      <ul className="mt-[10%] space-y-5 bg-gradient-to-tl from py-10">
        {RenderTask}
      </ul>
    </div>
  );
};

export default Hero;
