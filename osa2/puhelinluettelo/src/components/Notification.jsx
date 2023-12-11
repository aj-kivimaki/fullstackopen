const Notification = ({ message, errorMessage }) => {
  return (
    <>
      {message && <div className="message">{message}</div>}
      {errorMessage && <div className="message error">{errorMessage}</div>}
    </>
  );
};

export default Notification;
