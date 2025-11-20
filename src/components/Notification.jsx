import { useEffect, useState } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    window.notify = (message, type = "success") => {
      const id = Date.now();

      setNotifications((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 3500);
    };
  }, []);

  return (
    <div id="notification-container">
      {notifications.map((note) => (
        <div key={note.id} className={`notification ${note.type}`}>
          {note.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
