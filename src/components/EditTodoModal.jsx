import { useState } from "react";

const EditTodoModal = ({ todo, onSave, onClose }) => {
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.description);
  const [due, setDue] = useState(todo.dueDate);

  return (
    <div className="modal show">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
        />
        <input
          type="datetime-local"
          value={due}
          onChange={(e) => setDue(e.target.value)}
        />
        <div className="modal-actions">
          <button
            onClick={() =>
              onSave(todo.id, { title, description: desc, dueDate: due })
            }
            className="btn-primary"
          >
            Update
          </button>
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditTodoModal;
