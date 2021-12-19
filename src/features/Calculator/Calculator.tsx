import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './dnd/Column';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeStructure,
  PropCalc, PropCalcItem, selectEditMode, selectStructure, toggleEditMode,
} from './CalculatorSlice';
import Switcher from '../../UI/switcher/Switcher';

const Calculator = () => {
  const dispatch = useAppDispatch();
  const structure: PropCalc = useAppSelector(selectStructure);
  const isEditMode: boolean = useAppSelector(selectEditMode);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;
    if (source.droppableId === destination.droppableId && destination.index === source.index) return null;

    const end = Object.assign([], structure[destination.droppableId]);
    if (destination.droppableId === source.droppableId && source.droppableId === 'arialTarget') {
      //перемещения в калькуляторе(в пределах правого столбца)
      const newList = Object.assign([], end.list);
      const temp = newList.splice(source.index, 1)[0];
      newList.splice(destination.index, 0, temp);

      const newCol = {
        id: end.id,
        list: newList,
      };
      dispatch(changeStructure({
        [end.id]: newCol,
      } as PropCalc));
    } else {
      //пермещения из source в target
      const compDragged = structure.arialSource.list.find(f => f.sort === Number(source.droppableId));
      // Create a new start column
      const newStartCol = {
        id: 'arialSource',
        list: structure.arialSource.list.filter(f => f.sort !== compDragged!.sort),
      };
      // Make a new end list array
      const newEndList = Object.assign([], end.list);
      // Insert the item into the end list
      newEndList.splice(destination.index, 0, compDragged!);
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      dispatch(changeStructure({
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      } as PropCalc));
    }
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
          <div className="column_left">
            {
              structure.arialSource.placeholder?.map((pl, index) => {
                const itemArea: PropCalcItem = {
                  id: index.toString(),
                  placeholder: [pl],
                  list: [pl],
                };
                return <div className="placeholder_component_wrap">
                  <div className="placeholder_component">
                    { pl.component }
                  </div>
                  {
                    structure.arialSource.list.some(s => s.sort === pl.sort)
                    && <Column col={ itemArea } key={ index } />
                  }
                </div>;
              })
            }
          </div>
          <div className="column_right">
            <Column col={ structure.arialTarget } key={ structure.arialTarget.id } />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Calculator;
