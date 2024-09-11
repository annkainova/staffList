import { useDispatch } from 'react-redux';
import Form from '../../../components/Form/Form';

import classes from './Form.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import getEmployeeById from '../../../api/getEmployeeById';
import { EditComponentInterface } from '../../../types/Employee';
import { setSelectedEmployee } from '../../../state/Slice/SelectedEmployeeSlice';
import { Button, Icon } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const EditComponent: React.FC<EditComponentInterface> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { employeesId } = useParams<{ employeesId: string }>();

  const requestEmployeeById = useCallback(async () => {
    if (props.isSelectedEmployee && employeesId) {
      try {
        const employeeResponse = await getEmployeeById(employeesId);
        dispatch(setSelectedEmployee(employeeResponse));
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    }
  }, [dispatch, employeesId, props.isSelectedEmployee]);

  useEffect(() => {
    requestEmployeeById();
  }, [requestEmployeeById]);

  const handleClickClose = () => {
    navigate('/');
  };

  return (
    <article className={classes.form}>
      <div className={classes.form__box}>
        <div className={classes.form__headerBox}>
          <h2 className={classes.form__header}>{props.header}</h2>
          <Button onClick={handleClickClose}>
            <Icon as={CloseIcon} />
          </Button>
        </div>
        <Form isSelectedEmployee={props.isSelectedEmployee} />
      </div>
    </article>
  );
};

export default EditComponent;
