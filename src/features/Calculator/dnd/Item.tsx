import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface ItemProps {
  text : string,
  index : number,
  partial : JSX.Element
}

const Item : FC<ItemProps> = ({ text, index, partial }) => (
  <Draggable draggableId={ text } index={ index }>
    { (provided) => (
      <div
        // onDoubleClick={ () => removeElement(partial) }
        ref={ provided.innerRef }
        { ...provided.draggableProps }
        { ...provided.dragHandleProps }
      >
        { partial }
      </div>
    ) }
  </Draggable>
);

export default Item;
