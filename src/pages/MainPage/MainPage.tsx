import SortFilterSection from '../../components/SortFilterSection/SortFilterSection';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import Header from '../../components/Header/Header';

const MainPage = () => {
  return (
    <section className="container main">
      <div className="grid">
        <Header />
        <SortFilterSection />
        <EmployeeList />
      </div>
    </section>
  );
};

export default MainPage;
