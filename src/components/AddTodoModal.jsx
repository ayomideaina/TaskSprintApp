import { useState } from "react";

const AddTodoModal = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");

  const handleSubmit = () => {
    if (!title || !due) return;
    onAdd({ title, description: desc, dueDate: due, completed: false });
  };

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Task</h2>
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={desc}
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="datetime-local"
          value={due}
          onChange={(e) => setDue(e.target.value)}
        />
        <button onClick={handleSubmit} className="btn-primary">
          Add Task
        </button>
      </div>
    </div>
  );
};
export default AddTodoModal;
