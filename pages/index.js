import styles from '../styles/Home.module.css'
import NavBar from "../comps/layout/navBar/navBar";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <NavBar title="Title" />
      <div className={styles.boxContainer}>
        <div className={styles.boxOne} />
        <div className={styles.boxesTwoContainer}>
          <div className={styles.boxTwo} />
          <div className={styles.boxTwo} />
        </div>
      </div>
    </div>
  );
}
