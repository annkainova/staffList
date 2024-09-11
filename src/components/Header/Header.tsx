import React from 'react';
import { Button } from '@chakra-ui/react';
import classes from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSelectedEmployee } from '../../state/Slice/SelectedEmployeeSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClickAdd = () => {
    dispatch(deleteSelectedEmployee());
    navigate('/employees-add');
  };

  return (
    <div className={classes.header}>
      <h1 className="h1">Список сотрудников</h1>
      <Button colorScheme="blue" onClick={handleClickAdd}>
        Добавить сотрудника{' '}
      </Button>
    </div>
  );
};

export default Header;
