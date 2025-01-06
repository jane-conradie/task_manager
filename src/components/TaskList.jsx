import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  showForm,
  setShowForm,
  taskToEdit,
  setTaskToEdit,
  setNewTaskName,
  taskName,
  markTaskAsDone,
  searchString,
}) => {
  const filteredTasks =
    searchString != ""
      ? tasks.filter((task) => task.name.includes(searchString))
      : tasks;

  return (
    <ol>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          showForm={showForm}
          setShowForm={setShowForm}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
          setNewTaskName={setNewTaskName}
          taskName={taskName}
          markTaskAsDone={markTaskAsDone}
        />
      ))}
    </ol>
  );
};

export default TaskList;
