import axios from 'axios';

const getEmployeeById = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://5c9db9ec928658d3.mokky.dev/employees/${id}`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error when get employee by id');
    }
  }
};

export default getEmployeeById;
