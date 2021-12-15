import React, { FC } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { OperationEnum } from '../model/OperationEnum';
import CalcOperation from './CalcOperation';

const CalcOperations : FC = () => {
  const dispatch = useAppDispatch();
  // const operand1 = useAppSelector(selectDisplayOperand1);

  const clickHandlerOperation = (operation : OperationEnum) => {
    // if (operand1 !== undefined) {
    //   dispatch(addOperation(operation));
    // }
  };
  const operationList = [
    OperationEnum.fold,
    OperationEnum.subtract,
    OperationEnum.multiply,
    OperationEnum.division,
  ];

  return (
    <div className="calc_partial">
      <div className="row">
        {
          operationList.map((o) => (
            <CalcOperation
              key={ o }
              operation={ o }
              onClick={ () => clickHandlerOperation(o) }
            />
          ))
        }
      </div>
    </div>
  );
};

export default CalcOperations;
