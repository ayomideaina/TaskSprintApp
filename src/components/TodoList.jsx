
const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <i className="fa-solid fa-note-sticky"></i>
        <p>No tasks yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <ul id="task-list">
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}


export default TodoList;