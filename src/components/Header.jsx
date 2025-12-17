

const Header = ({ onAddClick, toggleTheme }) => {

    return (
    <header className="container">
      <div className="logo">
        <h1>Task Sprint</h1>
      </div>

      <div className="header-controls">
        <input type="text" placeholder="Search tasks..." />

        <div className="header-buttons">
          <button className="icon-btn" onClick={toggleTheme}>
            <i className="fas fa-sun"></i>
          </button>

          <button className="add-btn" onClick={onAddClick}>
            <i className="fa-solid fa-plus"></i> Add Task
          </button>
        </div>
      </div>
    </header>
  );
}


export default Header;