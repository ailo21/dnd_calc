import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  deleteFromCalculator,
  PropCalc,
  selectEditMode,
  selectStructure,
} from '../CalculatorSlice';

interface ItemProps {
  sort: number,
  index: number,
  partial: JSX.Element
}

const Item: FC<ItemProps> = ({ sort, index, partial }) => {
  const dispatch = useAppDispatch();
  const isPromMode = useAppSelector(selectEditMode);
  const columns: PropCalc = useAppSelector(selectStructure);
  const removeElement = (ComponentId: number) => {
    //убедимся что мы в режиме редактирования
    if (!isPromMode) return null;
    // убедимся что двойной клик проищошел по элементу в правой колоне (в калькуляторе)
    if (columns.arialSource.list.some((s) => s.sort === ComponentId)) return null;
    dispatch(deleteFromCalculator(sort));
  };
  return (
    <Draggable draggableId={ sort.toString() } index={ index }>
      { (provided) => (
        <div
          onDoubleClick={ () => removeElement(sort) }
          ref={ provided.innerRef }
          { ...provided.draggableProps }
          { ...provided.dragHandleProps }
        >
          { partial }
        </div>
      ) }
    </Draggable>
  );
};

export default Item;
