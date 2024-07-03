import styles from './FeedbackMessage.module.css';

export default function FeedbackMessage({ message, condition }) {
  return <div className={condition ? styles.pass : styles.fail}>{message}</div>;
}
