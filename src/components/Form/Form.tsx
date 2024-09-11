import React, { useEffect } from 'react';
import { Input, Select, FormLabel, Button, useToast } from '@chakra-ui/react';
import classes from './Form.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import editEmployees from '../../api/editEmployee';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import createEmployees from '../../api/createEmployee';
import { useHookFormMask } from 'use-mask-input';

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

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({});
  const registerWithMask = useHookFormMask(register);

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
      : 'Cотрудник создан успешно';

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
        <Input
          {...register('name', {
            required: 'Обязательное поле (Вы не можете оставить поле пустым)',
          })}
          size="md"
          isInvalid={!!errors.name}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <FormLabel>Номер телефона</FormLabel>
        <Input
          {...registerWithMask('phone', ['+9 (999) 999-9999'], {
            required:
              'Пожалуйста, введите номер телефона в формате +x (xxx) xxx-xxxx',
          })}
          type="tel"
          size="md"
          isInvalid={!!errors.phone}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>

      <div>
        <FormLabel>Дата рождения</FormLabel>
        <Input
          {...registerWithMask('birthday', ['99.99.9999'], {
            required: 'Пожалуйста, введите дату рождения в формате ДД.ММ.ГГГГ',
            pattern: {
              value: /^\d{2}\.\d{2}\.\d{4}$/,
              message: 'Дата должна быть в формате ДД.ММ.ГГГГ',
            },
          })}
          size="md"
          isInvalid={!!errors.birthday}
        />
        {errors.birthday && <p className="error">{errors.birthday.message}</p>}
      </div>

      <div>
        <FormLabel>Должность</FormLabel>
        <Select
          {...register('role', { required: 'Должность обязательна' })}
          isInvalid={!!errors.role}
        >
          <option value="cook">Повар</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
        </Select>
        {errors.role && <p>{errors.role.message}</p>}
      </div>

      <div>
        <FormLabel>Статус</FormLabel>
        <label>
          <input type="checkbox" {...register('isArchive')} /> В архиве
        </label>
      </div>

      <Button type="submit" colorScheme="blue" mt={4}>
        Сохранить
      </Button>
    </form>
  );
};

export default Form;
