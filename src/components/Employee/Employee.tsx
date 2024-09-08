import React from 'react';
import { Td, Tr } from '@chakra-ui/react';

const Employee: React.FC = () => {
  return (
    // <article className={classes.employee}>
    //   <div className={classes.employee__info}>
    //     <h5 className={classes.employee__name}>Илья Емельянов</h5>
    //     <p className={classes.employee__birthdate}>12.02.1982</p>
    //   </div>

    //   <div className={classes.employee__personal}>
    //     <p className={classes.employee__position}>driver</p>
    //     <p className={classes.employee__phone}>+7 (883) 508-3269</p>
    //   </div>
    // </article>
    <Tr>
      <Td>Илья Емельянов</Td>
      <Td>driver</Td>
      <Td isNumeric>+7 (883) 508-3269</Td>
      <Td isNumeric>12.02.1982</Td>
    </Tr>
  );
};

export default Employee;
