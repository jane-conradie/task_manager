import { useEffect, useState } from "react";

import "./App.css";

import { TaskList, TaskForm } from "./components";

import taskService from "./services/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [newTaskName, setNewTaskName] = useState("");

  // get all tasks from the server
  // set tasks state
  useEffect(() => {
    taskService.getAll().then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = (event) => {
    event.preventDefault();

    const taskObject = {
      id: String(tasks.length + 1),
      name: newTaskName,
      status: String(0),
    };

    taskService.addTask(taskObject).then((response) => {
      // set task list
      setTasks(tasks.concat(response.data));

      // reset value
      setNewTaskName("");
    });
  };

  const deleteTask = (id) => {
    taskService.deleteTask(id).then((response) => {
      // filter tasks to remove deleted task
      setTasks(tasks.filter((task) => task.id !== response.data.id));
    });
  };

  return (
    <>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <TaskForm
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        addTask={addTask}
      />
    </>
  );
};

export default App;
