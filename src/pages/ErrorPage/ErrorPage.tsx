import { Button } from '@chakra-ui/react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error('mistake!!:', error);

  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate('/');
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && error.message}</i>
      </p>
      <Button onClick={handleClickReturn}>Return to main</Button>
    </div>
  );
};

export default ErrorPage;
