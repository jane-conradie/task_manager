import { useState } from "react";

const TaskForm = ({ newTaskName, setNewTaskName, addTask }) => {
  // on edit
  // hide whatever is being edited
  // replace data here

  const [showFormEdit, setShowFormEdit] = useState(false);

  // to do set user input focus on form field after clikcing add

  const handleInputFieldChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    setShowFormEdit(false);
    addTask(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* only display form edit section if trying to edit a single task */}
      {showFormEdit ? (
        <div>
          <input
            type="text"
            value={newTaskName}
            onChange={handleInputFieldChange}
          />
          <input type="submit" value="save" />
        </div>
      ) : (
        <div></div>
      )}

      {/* to do remove */}
      <br />
      <br />
      <br />
      {/* to do remove */}
      <input
        type="button"
        value="add task"
        onClick={() => setShowFormEdit(!showFormEdit)}
      />
    </form>
  );
};

export default TaskForm;
