import React from 'react';
import { Td, Tr } from '@chakra-ui/react';
import { EmployeeInterface } from '../../types/Employee';
import classes from './Employee.module.scss';

const Employee: React.FC<EmployeeInterface> = (props: EmployeeInterface) => {
  return (
    <article className={classes.employee}>
      <div className={classes.employee__info}>
        <h5 className={classes.employee__name}>{props.name}</h5>
        <p className={classes.employee__birthdate}>{props.birthday}</p>
      </div>

      <div className={classes.employee__personal}>
        <p className={classes.employee__position}>{props.role}</p>
        <p className={classes.employee__phone}>{props.phone}</p>
      </div>
    </article>
  );
};

export default Employee;
