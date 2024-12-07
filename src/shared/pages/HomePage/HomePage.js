import styles from './HomePage.module.scss';

/**
 * @function HomePage
 * @returns {JSX.Element}
 */
export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to the Home Page</h1>
      <img src='./assets/home.jpg' alt="Web development" className={styles.image} />
    </div>
  );
};
