import React, { FC } from 'react';
import s from './Switcher.module.css';

interface SwitcherProp {
  isRight : boolean,
  toggleEvent : () => void,
  leftTitle : string,
  rightTitle : string,
}

const Switcher : FC<SwitcherProp> = ({
                                       isRight, toggleEvent, leftTitle, rightTitle,
                                     }) => {
  return (
    <div className={ s.switcher_wrap }>
      <div className={ s.switcher }>
        <button
          className={ `${ s.mode } ${ s.mode_left } ${ (isRight ? '' : ' active') }` }
          onClick={ () => toggleEvent() }
          type="button"
        >
          <span>{ leftTitle }</span>
        </button>
        <button
          className={ `${ s.mode } ${ s.mode_right } ${ (isRight ? 'active' : '') }` }
          onClick={ () => toggleEvent() }
          type="button"
        >
          <span>{ rightTitle }</span>
        </button>
        <div className={ `${ s.switcher_border } ${ (isRight ? s.switcher_border_edit : s.switcher_border_calc) }` } />
      </div>
    </div>
  );
};

export default Switcher;