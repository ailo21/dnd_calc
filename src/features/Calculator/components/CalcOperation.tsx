import React, { FC } from 'react';
import { OperationEnum } from '../model/OperationEnum';

interface Props {
  operation : OperationEnum,
  onClick : (operation : OperationEnum) => void
}

const CalcOperation : FC<Props> = ({ operation, onClick }) => (
  <button
    className="operation_item"
    onClick={ () => {
      onClick(operation);
    } }
    type="button"
  >
    { operation }
  </button>
);

export default CalcOperation;
