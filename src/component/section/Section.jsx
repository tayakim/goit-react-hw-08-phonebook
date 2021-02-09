import styles from "../section/section.module.css";

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
