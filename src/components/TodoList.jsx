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
      <div className="task-box">
        {todos.length === 0 && (
          <div
            id="empty-state"
            className="empty-state"
            style={{ display: "flex" }}
          >
            <FontAwesomeIcon icon={faNoteSticky} className="empty-icon" />
            <p>No tasks yet. Add one above to get started!</p>
          </div>
        )}

        {todos.length > 0 && (
          <ul id="task-list">
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
        )}
      </div>
    </section>

    <footer className="container task-footer">
      <div className="filters ">
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
