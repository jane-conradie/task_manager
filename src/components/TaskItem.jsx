import TaskForm from "./TaskForm";

import isComplete from "../images/isComplete.png";

const TaskItem = ({
  task,
  deleteTask,
  showForm,
  setShowForm,
  setTaskToEdit,
  taskToEdit,
  setNewTaskName,
  taskName,
  editTask,
  markTaskAsDone,
}) => {
  const toggleForm = () => {
    // set values
    setTaskToEdit(task);
    setNewTaskName(task.name);
    setShowForm(true);
  };

  return (
    <div>
      {showForm && taskToEdit && taskToEdit.id === task.id ? (
        <TaskForm
          taskName={taskName}
          setNewTaskName={setNewTaskName}
          submitTask={editTask}
        />
      ) : (
        <div>
          {task.name}
          {task.isComplete ? <p>i done</p> : <p></p>}
          <button
            onClick={() => {
              markTaskAsDone(task);
            }}
          >
            mark as done
          </button>
          <button onClick={() => toggleForm()}>edit</button>
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
