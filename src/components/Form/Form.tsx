import React from 'react';
import { Input, Select, FormLabel, Checkbox, Button } from '@chakra-ui/react';
import classes from './Form.module.scss';

const Form = () => {
  return (
    <article className={classes.form}>
      <h2 className={classes.form__header}>Редактировать</h2>
      <form action="" className={classes.form__form}>
        <div>
          <FormLabel>Имя</FormLabel>
          <Input placeholder="Имя" size="md" />
        </div>

        <div>
          <FormLabel>Номер телефона</FormLabel>
          <Input placeholder="Номер телефона" size="md" />
        </div>

        <div>
          <FormLabel>Дата рождения</FormLabel>
          <Input placeholder="Дата рождения" size="md" />
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
          <Checkbox defaultChecked>В архиве</Checkbox>
        </div>
        <Button colorScheme="blue">Сохранить </Button>
      </form>
    </article>
  );
};

export default Form;
