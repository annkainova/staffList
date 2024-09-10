import { useSelector } from 'react-redux';
import Form from '../../../components/Form/Form';
import { RootState } from '../../../state/store';

import classes from './Form.module.scss';
import { useParams } from 'react-router-dom';

interface EditComponentInterface {
  header: string;
  // selectedEmployee: boolean;
}

const EditComponent: React.FC<EditComponentInterface> = (props) => {
  // const employeeId = useParams<{ employeesId: string }>();
  const selectedEmployee = useSelector(
    (state: RootState) => state.selectedEmployee.selectedEmployee
  );

  console.log('selectedEmployee', selectedEmployee);



  return (
    <article className={classes.form}>
      <div className={classes.form__box}>
        <h2 className={classes.form__header}>{props.header}</h2>
        <Form
          id={selectedEmployee.id}
          name={selectedEmployee.name}
          role={selectedEmployee?.role}
          phone={selectedEmployee?.phone}
          birthday={selectedEmployee?.birthday}
          isArchive={selectedEmployee?.isArchive}
        />
      </div>
    </article>
  );
};

export default EditComponent;
