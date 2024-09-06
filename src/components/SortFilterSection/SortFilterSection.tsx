import React from 'react';
import { Select, Checkbox, Divider } from '@chakra-ui/react';
import classes from './SortFilterSection.module.scss';

const SortFilterSection = () => {
  return (
    <aside className={classes.SortFilter}>
      <div className={classes.SortFilter__sort}>
        <Select placeholder="Сортировка">
          <option value="option1">По дате рождения + -</option>
          <option value="option2">По дате рождения - +</option>
          <option value="option3">По имени А - Я </option>
          <option value="option3">По имени Я - А </option>
        </Select>
      </div>

      <Divider />

      <div className={classes.SortFilter__filter}>
        <div>
          <h3 >Должность</h3>
          <Select>
            <option value="option1">Повар</option>
            <option value="option2">Офицант</option>
            <option value="option3">Водитель</option>
          </Select>
        </div>

        <div>
          <h3>Статус</h3>
          <Checkbox defaultChecked>В архиве</Checkbox>
        </div>
      </div>
    </aside>
  );
};

export default SortFilterSection;
