const DeleteTodoModal = ({ onConfirm, onClose }) => (
  <div className="modal show">
    <div className="modal-content">
      <p>Are you sure?</p>
      <button onClick={onConfirm}>Yes, Delete</button>
      <button onClick={onClose} className="clear-btn">
        Cancel
      </button>
    </div>
  </div>
);
export default DeleteTodoModal;
