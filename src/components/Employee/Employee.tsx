import React from 'react';
import classes from './Employee.module.scss';

const Employee: React.FC = () => {
  return (
    <article className={classes.employee}>
      <div className={classes.employee__info}>
        <h5 className={classes.employee__name}>Илья Емельянов</h5>
        <p className={classes.employee__birthdate}>12.02.1982</p>
      </div>

      <div className={classes.employee__personal}>
        <p className={classes.employee__position}>driver</p>
        <p className={classes.employee__phone}>+7 (883) 508-3269</p>
      </div>
    </article>
  );
};

export default Employee;
