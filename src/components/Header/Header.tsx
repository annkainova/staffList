import React from 'react';
import { Button } from '@chakra-ui/react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className="h1">Список сотрудников</h1>
      <Button colorScheme="blue">Добавить сотрудника </Button>
    </div>
  );
};

export default Header;
