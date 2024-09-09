import React from 'react';
import { Input, Select, FormLabel, Checkbox, Button } from '@chakra-ui/react';
import classes from './Form.module.scss';
import { EmployeeInterface } from '../../types/Employee';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
  role: string;
  phone: number;
  birthday: number;
}

const FormComponent: React.FC<EmployeeInterface> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <article className={classes.form}>
      <div className={classes.form__box}>
        <h2 className={classes.form__header}>Редактировать</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form__form}>
          <div>
            <FormLabel>Имя</FormLabel>
            <Input {...register('name')} placeholder={props.name} size="md" />
          </div>

          <div>
            <FormLabel>Номер телефона</FormLabel>
            <Input placeholder={props.phone} size="md" />
          </div>

          <div>
            <FormLabel>Дата рождения</FormLabel>
            <Input placeholder={props.birthday} size="md" />
          </div>

          <div>
            <FormLabel>Должность</FormLabel>
            <Select>
              <option value="option1">Повар</option>
              <option value="option2">Офицант</option>
              <option value="option3">Водитель</option>
            </Select>
          </div>

          <div>
            <FormLabel>Статус</FormLabel>
            <Checkbox defaultChecked={false}>В архиве</Checkbox>
          </div>
          <Button colorScheme="blue">Сохранить </Button>
        </form>
      </div>
    </article>
  );
};

export default FormComponent;
