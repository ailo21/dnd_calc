import React, { FC } from 'react';

interface Props {
  onClick : () => void
}

const CalcPoint : FC<Props> = ({ onClick }) => (
  <button
    className="num"
    onClick={ () => {
      onClick();
    } }
    type="button"
  >
    ,
  </button>
);

export default CalcPoint;
