const DeleteTodoModal = ({ onConfirm, onClose }) => (
  <div className="modal show">
    <div className="modal-content">
      <p>Are you sure?</p>
      <button onClick={onConfirm} className="btn-cancel">
        Yes, Delete
      </button>
      <button onClick={onClose} className="btn-primary">
        Cancel
      </button>
    </div>
  </div>
);
export default DeleteTodoModal;
