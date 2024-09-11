import React, { useEffect } from 'react';
import InputMask from 'react-input-mask';
import { Input, Select, FormLabel, Button, useToast } from '@chakra-ui/react';
import classes from './Form.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import editEmployees from '../../api/editEmployee';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import createEmployees from '../../api/createEmployee';

interface IFormInput {
  name: string;
  role: string;
  phone: string;
  birthday: string;
  isArchive: boolean;
}

interface FormType {
  isSelectedEmployee: boolean;
}

const Form: React.FC<FormType> = (props) => {
  const navigate = useNavigate();
  const { employeesId } = useParams<{ employeesId: string }>();
  const toast = useToast();
  const selectedEmployee = useSelector(
    (state: RootState) => state.selectedEmployee.selectedEmployee
  );

  const { register, handleSubmit, setValue, reset } = useForm<IFormInput>({});

  useEffect(() => {
    if (selectedEmployee) {
      setValue('name', selectedEmployee.name);
      setValue('role', selectedEmployee.role);
      setValue('phone', selectedEmployee.phone);
      setValue('birthday', selectedEmployee.birthday);
      setValue('isArchive', selectedEmployee.isArchive);
    }
  }, [selectedEmployee, reset, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const textSuccess = props.isSelectedEmployee
      ? 'Редактирование успешно'
      : 'Cотрудник создан';

    const action =
      props.isSelectedEmployee && employeesId
        ? editEmployees(employeesId, data)
        : createEmployees(data);

    try {
      await action;
      toast({
        title: textSuccess,
        description: '',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      navigate('/');
    } catch (error) {
      console.error('Ошибка при :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form__form}>
      <div>
        <FormLabel>Имя</FormLabel>
        <Input {...register('name')} size="md" />
      </div>

      <div>
        <FormLabel>Номер телефона</FormLabel>
        <InputMask
          mask="+7 (999) 999 - 9999"
          {...register('phone', {
            required: 'Номер телефона обязателен',
          })}
        >
          {(inputProps: IFormInput) => (
            <Input {...inputProps} type="tel" size="md" />
          )}
        </InputMask>
      </div>

      <div>
        <FormLabel>Дата рождения</FormLabel>
        <InputMask
          mask="99.99.9999"
          {...register('birthday', {
            required: 'Дата рождения обязательна',
            pattern: {
              value: /^\d{2}\.\d{2}\.\d{4}$/,
              message: 'Дата должна быть в формате ДД.ММ.ГГГГ',
            },
          })}
        >
          {(inputProps: IFormInput) => <Input {...inputProps} size="md" />}
        </InputMask>
      </div>

      <div>
        <FormLabel>Должность</FormLabel>
        <Select {...register('role')}>
          <option value="cook">Повар</option>
          <option value="waiter">Офицант</option>
          <option value="driver">Водитель</option>
        </Select>
      </div>

      <div>
        <FormLabel>Статус</FormLabel>
        <label>
          <input type="checkbox" {...register('isArchive')} /> В архиве
        </label>
      </div>
      <Button type="submit" colorScheme="blue">
        Сохранить
      </Button>
    </form>
  );
};

export default Form;
