import axios from 'axios';

interface getEmployeesInterface {
  sortBy?: string;
  role?: string;
  isArchive?: boolean;
}

const getEmployees = async (filters?: getEmployeesInterface) => {
  try {
    const params: any = {};

    if (filters?.sortBy) {
      params.sortBy = filters.sortBy;
    }

    if (filters?.role) {
      params.role = filters.role;
    }

    if (filters?.isArchive === true) {
      params.isArchive = 'true';
    }

    const { data } = await axios.get(
      'https://5c9db9ec928658d3.mokky.dev/employees',
      { params }
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error when receiving employees');
    }
  }
};

export default getEmployees;
