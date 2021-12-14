import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnProps } from '../model/CalcPartial';
import Item from './Item';

const Column : FC<ColumnProps> = ({ col: { list, id } }) => {
  return (
    <Droppable droppableId={ id }>
      { (provided) => (
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
            {/*{ id === 'calculator' && <Placeholder /> }*/ }
          </div>
        </div>
      ) }
    </Droppable>
  );
};

export default Column;