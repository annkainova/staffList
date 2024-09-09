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

  console.log('employeesList', employeesList);

  return (
    <section className={classes.employeeList}>
      {employeesList.map((employee: EmployeeInterface) => (
        <Link to={`employees/${employee.id}`} key={employee.id}>
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
