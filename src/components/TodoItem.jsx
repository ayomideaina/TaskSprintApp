import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faPen, faTrash } from "../icons";

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => (
  <li className={`task-item ${todo.completed ? "completed" : ""}`}>
    <div className="task-left">
      <button className="circle-btn" onClick={() => onToggle(todo)}>
        <FontAwesomeIcon icon={faCheck} />
      </button>

      <div className="task-info">
        <h3>{todo.title}</h3>
        {todo.description && <p>{todo.description}</p>}
        {todo.dueDate && (
          <span className="task-date">
            Due: {new Date(todo.dueDate).toLocaleString()}
          </span>
        )}
      </div>
    </div>

    <div className="task-actions">
      <button onClick={() => onEdit(todo)} className="edit-btn">
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button onClick={() => onDelete(todo)} className="delete-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  </li>
);

export default TodoItem;
