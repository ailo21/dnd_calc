import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnProps } from '../model/CalcPartial';
import Item from './Item';
import Placeholder from '../components/Placeholder';
import { useAppSelector } from '../../../app/hooks';
import { PropCalc, selectEditMode, selectStructure } from '../CalculatorSlice';

const Column: FC<ColumnProps> = ({ col: { list, id } }) => {
  const structure: PropCalc = useAppSelector(selectStructure);
  const isEditMode: boolean = useAppSelector(selectEditMode);
  const showPlaceholder: boolean = id === 'arialTarget' && structure.arialSource.list.length > 0 && isEditMode;
  return (
    <Droppable droppableId={ id } type="TASK">
      { (provided, snapshot) => (
        <div
          className={ `column column_${ id }` }
        >
          <div
            style={ {
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            } }
            ref={ provided.innerRef }
            { ...provided.droppableProps }
          >
            { list?.map((partial, index) => (
              <Item partial={ partial.component } key={ partial.sort } sort={ partial.sort } index={ index } />
            )) }
            { provided.placeholder }
            { showPlaceholder && <Placeholder active={ snapshot.isDraggingOver } /> }
          </div>
        </div>
      ) }
    </Droppable>
  );
};

export default Column;