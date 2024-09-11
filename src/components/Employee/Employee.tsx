import React from 'react';
import { EmployeeInterface } from '../../types/Employee';
import classes from './Employee.module.scss';

const Employee: React.FC<EmployeeInterface> = (props: EmployeeInterface) => {
  const role = (roleValue: string) => {
    if (roleValue === 'cook') {
      return 'Повар';
    }
    if (roleValue === 'waiter') {
      return 'Офицант';
    }
    if (roleValue === 'driver') {
      return 'Водитель';
    }
  };
  return (
    <article className={classes.employee}>
      <div className={classes.employee__info}>
        <h5 className={classes.employee__name}>{props.name}</h5>
        <p className={classes.employee__birthrate}>{props.birthday}</p>
      </div>

      <div className={classes.employee__personal}>
        <p className={classes.employee__position}>{role(props.role)}</p>
        <p className={classes.employee__phone}>{props.phone}</p>
      </div>
    </article>
  );
};

export default Employee;
