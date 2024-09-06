import React from 'react';
import SortFilterSection from '../../components/SortFilterSection/SortFilterSection';
import EmployeeList from '../../components/EmployeeList/EmployeeList';

const MainPage = () => {
  return (
    <section className="grid container">
      <SortFilterSection />
      <EmployeeList />
    </section>
  );
};

export default MainPage;
