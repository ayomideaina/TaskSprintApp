import { faMoon, faPlus, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon, faPlus } from "../icons";

const Header = ({ theme, toggleTheme, openAdd }) => (
  <header className="container">
    <div className="logo">
      <h1>Task Sprint</h1>
    </div>

    <div className="header-buttons">
      <button className="icon-btn" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </button>

      <button className="add-btn" onClick={openAdd}>
        <FontAwesomeIcon icon={faPlus} /> Add Task
      </button>
    </div>
  </header>
);

export default Header;
