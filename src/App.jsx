import { useEffect, useState } from "react";

import "./App.css";

import { TaskList, TaskForm, Search } from "./components";

import taskService from "./services/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [newTaskName, setNewTaskName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [taskToEdit, setTaskToEdit] = useState();

  const [searchString, setSearchString] = useState("");

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
      isComplete: false,
    };

    taskService.addTask(taskObject).then((response) => {
      // set task list
      setTasks(tasks.concat(response.data));

      // reset value
      setNewTaskName("");
      setShowForm(false);
    });
  };

  const editTask = (event) => {
    event.preventDefault();

    const id = taskToEdit.id;

    // get task data
    const task = tasks.find((t) => t.id === id);
    // replace task data
    const newTask = {
      ...task,
      name: newTaskName,
    };

    // send new task to server
    taskService.editTask(id, newTask).then((response) => {
      // reset form values
      setShowForm(false);
      setTaskToEdit(null);
      setNewTaskName("");

      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    });
  };

  const markTaskAsDone = (task) => {
    // replace task data
    const newTask = {
      ...task,
      isComplete: !task.isComplete,
    };

    // send new task to server
    taskService.editTask(newTask.id, newTask).then((response) => {
      setTasks(
        tasks.map((task) => (task.id === newTask.id ? response.data : task))
      );
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
      <Search setSearchString={setSearchString} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        showForm={showForm}
        setShowForm={setShowForm}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
        setNewTaskName={setNewTaskName}
        taskName={newTaskName}
        markTaskAsDone={markTaskAsDone}
        searchString={searchString}
      />
      {showForm && !taskToEdit ? (
        <TaskForm
          setNewTaskName={setNewTaskName}
          addTask={addTask}
          taskName={newTaskName}
          editTask={editTask}
          submitTask={addTask}
        />
      ) : (
        <div />
      )}
      <button onClick={() => setShowForm(!showForm)}>add task</button>
    </>
  );
};

export default App;
