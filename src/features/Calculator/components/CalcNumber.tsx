import React, { FC } from 'react';

interface Props {
  num : number,
  onClick : (num : number) => void
}

const CalcNumber : FC<Props> = ({ num, onClick }) => (
  <button
    className="num"
    onClick={ () => {
      onClick(num);
    } }
    type="button"
  >
    { num }
  </button>
);

export default CalcNumber;
