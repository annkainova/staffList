export interface EmployeeInterface {
  id?: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}

export interface EditComponentInterface {
  header: string;
  isSelectedEmployee: boolean;
}
