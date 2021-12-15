import React from 'react';
import CalcNumber from './CalcNumber';
import CalcPoint from './CalcPoint';
import { useAppDispatch } from '../../../app/hooks';

const CalcNumbersList = () => {
  const dispatch = useAppDispatch();
  // const operation = useAppSelector(selectDisplayOperation);
  // const computedResult = useAppSelector(selectIsComputedRes);

  const clickHandlerPoint = () => {
    // if (computedResult) {
    //   dispatch(displayClear());
    //   dispatch(addOperand1('.'));
    // } else if (operation === undefined) {
    //   dispatch(addOperand1('.'));
    // } else {
    //   dispatch(addOperand2('.'));
    // }
  };
  const clickHandlerNum = (num: number) => {
    // const stringNum = String(num);
    // if (computedResult) {
    //   dispatch(displayClear());
    //   dispatch(addOperand1(stringNum));
    // } else if (operation === undefined) {
    //   dispatch(addOperand1(stringNum));
    // } else {
    //   dispatch(addOperand2(stringNum));
    // }
  };

  return (
    <div className="calc_partial">
      <div className="row">
        <CalcNumber num={7} onClick={() => clickHandlerNum(7)} />
        <CalcNumber num={8} onClick={() => clickHandlerNum(8)} />
        <CalcNumber num={9} onClick={() => clickHandlerNum(9)} />
      </div>
      <div className="row">
        <CalcNumber num={4} onClick={() => clickHandlerNum(4)} />
        <CalcNumber num={5} onClick={() => clickHandlerNum(5)} />
        <CalcNumber num={6} onClick={() => clickHandlerNum(6)} />
      </div>
      <div className="row">
        <CalcNumber num={1} onClick={() => clickHandlerNum(1)} />
        <CalcNumber num={2} onClick={() => clickHandlerNum(2)} />
        <CalcNumber num={3} onClick={() => clickHandlerNum(3)} />
      </div>
      <div className="row row_with_point">
        <CalcNumber num={0} onClick={() => clickHandlerNum(0)} />
        <CalcPoint onClick={() => clickHandlerPoint()} />
      </div>

    </div>
  );
};

export default CalcNumbersList;
