import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import Employee from '../Employee/Employee';
import classes from './EmployeeList.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import getEmployees from '../../api/getEmployees';
import { useCallback, useEffect, useState } from 'react';
import { EmployeeInterface } from '../../types/Employee';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesList } from '../../state/Slice/EmployeesListSlice';
import { RootState } from '../../state/store';
import { setSelectedEmployee } from '../../state/Slice/SelectedEmployeeSlice';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employeesList = useSelector(
    (state: RootState) => state.employees.employeesList
  );

  const requestAllEmployees = useCallback(async () => {
    try {
      const employeesListResponse = await getEmployees();
      dispatch(setEmployeesList(employeesListResponse));
    } catch (error) {
      console.error('Error request all employee:', error);
    }
  }, [getEmployees]);

  useEffect(() => {
    requestAllEmployees();
  }, [requestAllEmployees]);

  const handleClickEmployee = (selectedEmployee: EmployeeInterface) => {
    dispatch(setSelectedEmployee(selectedEmployee));
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
