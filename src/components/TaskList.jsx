import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ol>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ol>
  );
};

export default TaskList;
