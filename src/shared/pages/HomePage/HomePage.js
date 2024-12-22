import classes from './HomePage.module.scss';
import { defaultBannerURL } from 'shared/assets';

/**
 * @function HomePage
 * @returns {JSX.Element}
 */
export const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <h1>Welcome to the Home Page</h1>
      <img src={defaultBannerURL}
        alt="Web development"
        className={classes.image} />
    </div>
  );
};
