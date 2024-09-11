import React from 'react';
import { Select, Checkbox, Divider, FormLabel } from '@chakra-ui/react';
import classes from './SortFilterSection.module.scss';
import { useDispatch } from 'react-redux';
import {
  setIsArchive,
  setRole,
  setSortBy,
} from '../../state/Slice/SortFilterSlice';

const SortFilterSection = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value));
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRole(event.target.value));
    console.log(event.target.value);
  };

  const handleIsArchiveChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setIsArchive(event.target.checked));
  };

  return (
    <article className={classes.sortFilter}>
      <div className={classes.sortFilter__sort}>
        <Select placeholder="" boxShadow="sm" onChange={handleSortChange}>
          <option value="">По умолчанию</option>
          <option value="birthday">По дате рождения + -</option>
          <option value="-birthday">По дате рождения - +</option>
          <option value="name">По имени А - Я </option>
          <option value="-name">По имени Я - А </option>
        </Select>
      </div>

      <Divider />

      <div className={classes.sortFilter__filter}>
        <div>
          <FormLabel>Должность</FormLabel>
          <Select boxShadow="sm" onChange={handleRoleChange}>
            <option value="cook">Повар</option>
            <option value="waiter">Офицант</option>
            <option value="driver">Водитель</option>
          </Select>
        </div>

        <div>
          <FormLabel>Статус</FormLabel>
          <Checkbox onChange={handleIsArchiveChange}>В архиве</Checkbox>
        </div>
      </div>
    </article>
  );
};

export default SortFilterSection;
