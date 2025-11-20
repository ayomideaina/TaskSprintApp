import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onEdit,
  onDelete,
  onToggle,
  filter,
  setFilter,
  clearCompleted,
}) => (
  <>
    <section className="container">
      <ul id="task-list">
        {todos.length === 0 && (
          <div id="empty-state" className="empty-state">
            <FontAwesomeIcon icon={faNoteSticky} />
            <p>No tasks yet. Add one above to get started!</p>
          </div>
        )}

        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </section>
    <footer className="container">
      <div className="filters">
        {["All", "Active", "Completed"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <button className="clear-btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </footer>
  </>
);

export default TodoList;
