import React, { useEffect } from 'react';
import { Input, Select, FormLabel, Checkbox, Button } from '@chakra-ui/react';
import classes from './Form.module.scss';
import { EmployeeForm } from '../../types/Employee';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
  role: string;
  phone: string;
  birthday: string;
  isArchive: boolean;
}

const Form: React.FC<EmployeeForm> = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({});

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setValue('name', props.name);
    setValue('role', props.role);
    setValue('phone', props.phone);
    setValue('birthday', props.birthday);
    setValue('isArchive', props.isArchive);
  }, [props, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form__form}>
      <div>
        <FormLabel>Имя</FormLabel>
        <Input {...register('name')} size="md" />
      </div>

      <div>
        <FormLabel>Номер телефона</FormLabel>
        <Input {...register('phone')} size="md" />
      </div>

      <div>
        <FormLabel>Дата рождения</FormLabel>
        <Input {...register('birthday')} size="md" />
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
        <Checkbox {...register('isArchive')} isChecked={props.isArchive}>
          В архиве
        </Checkbox>
      </div>
      <Button type="submit" colorScheme="blue">
        Сохранить
      </Button>
    </form>
  );
};

export default Form;
