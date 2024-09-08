import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import Employee from '../Employee/Employee';
import classes from './EmployeeList.module.scss';

const EmployeeList = () => {
  return (
    <section className={classes.employeeList}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Сотрудник</Th>
              <Th>Должность</Th>
              <Th isNumeric>Телефон</Th>
              <Th isNumeric>Дата Рождения</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default EmployeeList;
