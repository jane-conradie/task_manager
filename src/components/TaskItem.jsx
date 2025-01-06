const TaskItem = ({ task, deleteTask }) => {
  return (
    <div>
      {task.name}
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </div>
  );
};

export default TaskItem;
