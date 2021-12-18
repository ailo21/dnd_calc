import React, { FC } from 'react';
import { selectDisplay } from '../CalculatorSlice';
import { useAppSelector } from '../../../app/hooks';

const CalcDisplay: FC = () => {
  const displayValue = useAppSelector(selectDisplay);
  return (
    <div className="calc_partial calc_partial_display">
      <input readOnly value={displayValue} className="display" type="text" placeholder="0" />
    </div>
  );
};

export default CalcDisplay;
