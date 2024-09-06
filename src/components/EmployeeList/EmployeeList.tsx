import Employee from '../Employee/Employee';
import classes from './EmployeeList.module.scss';

const EmployeeList = () => {
  return (
    <section className={classes.employeeList}>
      <Employee />
      <Employee />
      <Employee />
    </section>
  );
};

export default EmployeeList;
