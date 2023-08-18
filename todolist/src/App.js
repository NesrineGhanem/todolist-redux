

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./features/taskSlice";

function App() {
  const [name, setname] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ name: name }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setname(e.target.value)} />
        <input type="submit" />
      </form>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <p>{task.name}</p>
            <button onClick={() => dispatch(deleteTask({ id: index }))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;