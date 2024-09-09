import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={classes.NotFoundPage}>
    <h1 className="h1">404 - Page not found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/">
      <Button>Back to Home</Button>
    </Link>
  </div>
);

export default NotFoundPage;
