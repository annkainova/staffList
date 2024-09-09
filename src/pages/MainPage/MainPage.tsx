// import React from 'react';
import SortFilterSection from '../../components/SortFilterSection/SortFilterSection';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
// import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import FormComponent from '../../components/Form/FormComponent';

const MainPage = () => {
  return (
    <section className="container main">
      <div className="grid">
        <Header />
        <SortFilterSection />
        <EmployeeList />
        <Outlet />
      </div>
    </section>
  );
};

export default MainPage;
