import classes from './HomePage.module.scss';

/**
 * @function HomePage
 * @returns {JSX.Element}
 */
export const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <h1>Welcome to the Home Page</h1>
      <img src='./assets/home.jpg' alt="Web development" className={classes.image} />
    </div>
  );
};
