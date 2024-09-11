import { EmployeeInterface } from '../types/Employee';
import axios from 'axios';

const createEmployees = async (employeeData: Partial<EmployeeInterface>) => {
  try {
    const { data } = await axios.post(
      `https://5c9db9ec928658d3.mokky.dev/employees/`,
      employeeData
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error when create employees');
    }
  }
};

export default createEmployees;
