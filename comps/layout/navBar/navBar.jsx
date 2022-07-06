import styles from "./navBar.module.css";

export default function NavBar({ title }) {
  return (
    <div className={styles.navBar}>
      <div className={styles.titleContainer}>{title}</div>
    </div>
  );
}