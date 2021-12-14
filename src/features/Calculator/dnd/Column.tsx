import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnProps } from '../model/CalcPartial';
import Item from './Item';
import Placeholder from '../components/Placeholder';

const Column : FC<ColumnProps> = ({ col: { list, id } }) => {
  const showPlaceholder : boolean = id === 'arialTarget';
  return (
    <Droppable droppableId={ id }>
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
              <Item partial={ partial.component } key={ index } text={ partial.sort.toString() } index={ index } />
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