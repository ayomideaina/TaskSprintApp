import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  const getDueClass = () => {
    if (!todo.dueDate || todo.completed) return "";

    const now = new Date();
    const due = new Date(todo.dueDate);
    const daysLeft = (due - now) / (1000 * 60 * 60 * 24);

    if (daysLeft < 0) return "overdue";
    if (daysLeft <= 2) return "due-soon";

    return "";
  };

  return (
    <li
      className={`task-item ${
        todo.completed ? "completed" : ""
      } ${getDueClass()}`}
    >
      <div className="task-left">
        <button className="circle-btn" onClick={() => onToggle(todo)}>
          <FontAwesomeIcon
            icon={faCheck}
            className={`check-icon ${todo.completed ? "done" : ""}`}
          />
        </button>

        <div className="task-info">
          <h3 className="task-title">{todo.title}</h3>

          {todo.description && <p>{todo.description}</p>}

          {todo.dueDate && (
            <span className="task-date">
              Due: {new Date(todo.dueDate).toLocaleString()}
            </span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <button onClick={() => onEdit(todo)} className="icon-btn edit-btn">
          <FontAwesomeIcon icon={faPen} />
        </button>

        <button onClick={() => onDelete(todo)} className="icon-btn del-btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
