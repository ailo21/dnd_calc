import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './dnd/Column';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  PropCalc, selectEditMode, selectStructure, toggleEditMode,
} from './CalculatorSlice';
import Switcher from '../../UI/switcher/Switcher';

const Calculator = () => {
  const dispatch = useAppDispatch();
  const ColumnList : PropCalc = useAppSelector(selectStructure);
  const isEditMode : boolean = useAppSelector(selectEditMode);

  useEffect(() => {
  }, []);

  const onDragEnd = ({ source, destination } : DropResult) => {
    // debugger;
    console.log(source, destination);
  };
  const changeMode = () => {
    dispatch(toggleEditMode());
  };
  return (
    <div className={ isEditMode ? 'mode mode__constructor' : 'mode mode__calculator' }>
      <Switcher
        isRight={ isEditMode }
        toggleEvent={ changeMode }
        leftTitle="Runtime"
        rightTitle="Constructor"
      />
      <DragDropContext onDragEnd={ onDragEnd }>
        <div className="drag_columns">
          <Column col={ ColumnList.arialSource } key={ ColumnList.arialSource.id } />
          <Column col={ ColumnList.arialTarget } key={ ColumnList.arialTarget.id } />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Calculator;
