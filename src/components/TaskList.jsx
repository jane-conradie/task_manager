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
}) => {
  return (
    <ol>
      {tasks.map((task) => (
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
        />
      ))}
    </ol>
  );
};

export default TaskList;
