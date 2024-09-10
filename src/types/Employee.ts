export interface EmployeeInterface {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}

export interface EmployeeForm extends EmployeeInterface {
  header: string;
}
