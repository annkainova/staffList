import { EmployeeInterface } from '../types/Employee';
import axios from 'axios';

const editEmployees = async (
  id: string,
  employeeData: Partial<EmployeeInterface>
) => {
  try {
    const { data } = await axios.patch(
      `https://5c9db9ec928658d3.mokky.dev/employees/${id}`,
      employeeData
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error when edit employee');
    }
  }
};

export default editEmployees;
