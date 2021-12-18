import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './dnd/Column';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeStructure,
  PropCalc, selectEditMode, selectStructure, toggleEditMode,
} from './CalculatorSlice';
import Switcher from '../../UI/switcher/Switcher';

const Calculator = () => {
  const dispatch = useAppDispatch();
  const structure: PropCalc = useAppSelector(selectStructure);
  const isEditMode: boolean = useAppSelector(selectEditMode);

  useEffect(() => {
    // console.log(structure.arialSource.list.map((m)=>m.component.id));
  }, []);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;
    if (source.droppableId === destination.droppableId && destination.index === source.index) {
      return null;
    }

    const start = structure[source.droppableId];
    const end = Object.assign([], structure[destination.droppableId]);
    if (start.id === structure.arialTarget.id) {
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
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index,
      );

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = Object.assign([], end.list);

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      dispatch(changeStructure({
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      } as PropCalc));
      // обеспечим появление дисплея строго в первой позиции
      // if (newEndList.some((s : CalcPartial) => (s.component. === 'CalcDisplay'))) {
      //   const displayIndex = newEndList.findIndex((f : CalcPartial) => f.elementCalc === 'CalcDisplay');
      //   const temp = newEndList.splice(displayIndex, 1);
      //   newEndList.splice(0, 0, temp[0]);
      // }
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
          <Column col={ structure.arialSource } key={ structure.arialSource.id } />
          <Column col={ structure.arialTarget } key={ structure.arialTarget.id } />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Calculator;
