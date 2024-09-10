import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

import Employee from '../Employee/Employee';
import classes from './EmployeeList.module.scss';
import { Link } from 'react-router-dom';
import getEmployees from '../../api/getEmployees';
import { useCallback, useEffect, useState } from 'react';
import { EmployeeInterface } from '../../types/Employee';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesList } from '../../state/Slice/EmployeesListSlice';
import { RootState } from '../../state/store';
import { setSelectedEmployee } from '../../state/Slice/SelectedEmployee';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employeesList = useSelector(
    (state: RootState) => state.employees.employeesList
  );

  const performSearch = useCallback(async () => {
    const employeesListResponse = await getEmployees();
    dispatch(setEmployeesList(employeesListResponse));
  }, [getEmployees]);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  const handleClickEmployee = (selectedEmployee: EmployeeInterface) => {
    dispatch(setSelectedEmployee(selectedEmployee));
    console.log(selectedEmployee);
  };

  return (
    <section className={classes.employeeList}>
      {employeesList.map((employee: EmployeeInterface) => (
        <Link
          to={`employees-edit/${employee.id}`}
          key={employee.id}
          onClick={() => handleClickEmployee(employee)}
        >
          <Employee
            name={employee.name}
            role={employee.role}
            phone={employee.phone}
            birthday={employee.birthday}
            id={employee.id}
            isArchive={employee.isArchive}
          />
        </Link>
      ))}
    </section>
  );
};

export default EmployeeList;
