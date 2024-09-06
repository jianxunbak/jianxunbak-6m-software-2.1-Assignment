import styles from "./MyComponent.module.css";

const Details = ({ title, content }) => {
  return (
    <div className={styles.textContainer}>
      <h3>{title}</h3>
      <hr className={styles.line}></hr>
      <p className={styles.details}>{content}</p>
    </div>
  );
};

export default Details;
