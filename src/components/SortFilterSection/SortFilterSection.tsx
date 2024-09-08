import React from 'react';
import { Select, Checkbox, Divider, FormLabel } from '@chakra-ui/react';
import classes from './SortFilterSection.module.scss';

const SortFilterSection = () => {
  return (
    <article className={classes.sortFilter}>
      <div className={classes.sortFilter__sort}>
        <Select placeholder="Сортировка" boxShadow="sm">
          <option value="option1">По дате рождения + -</option>
          <option value="option2">По дате рождения - +</option>
          <option value="option3">По имени А - Я </option>
          <option value="option3">По имени Я - А </option>
        </Select>
      </div>

      <Divider />

      <div className={classes.sortFilter__filter}>
        <div>
          <FormLabel>Должность</FormLabel>
          <Select boxShadow="sm">
            <option value="option1">Повар</option>
            <option value="option2">Офицант</option>
            <option value="option3">Водитель</option>
          </Select>
        </div>

        <div>
          <FormLabel>Статус</FormLabel>
          <Checkbox defaultChecked>В архиве</Checkbox>
        </div>
      </div>
    </article>
  );
};

export default SortFilterSection;
