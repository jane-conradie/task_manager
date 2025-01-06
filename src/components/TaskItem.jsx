import TaskForm from "./TaskForm";

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
}) => {
  // mark as complete should just immediately change data

  // edit should actually show edit field

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
          <button onClick={() => toggleForm()}>edit</button>
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
