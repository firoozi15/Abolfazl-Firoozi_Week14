import styles from "./Notification.module.css";
import successIcon from "../assets/icons/success.svg";
import errorIcon from "../assets/icons/error.svg";
import infoIcon from "../assets/icons/info.svg";
import warningIcon from "../assets/icons/warning.svg";

function Notification({ title, type, closeNotification }) {
  const icons = {
    success: successIcon,
    error: errorIcon,
    info: infoIcon,
    warning: warningIcon,
  };
  return (
    <div
      className={`${styles.notification} ${styles[type]}`}
      onAnimationEnd={() => closeNotification()}
    >
      <div className={styles.icon}>
        <img src={icons[type]} alt="icon" />
      </div>
      <div className={styles.text}>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Notification;
