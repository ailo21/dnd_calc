import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import CalcEqual from './partial/CalcEqual';
import CalcNumbers from './partial/CalcNumbers';
import CalcDisplay from './partial/CalcDisplay';
import Column from './dnd/Column';
import { CalcPartial, ColumnProps } from './model/CalcPartial';

const ComponentList : CalcPartial[] = [

  {
    sort: 1,
    component: <CalcEqual />,
  }, {
    sort: 2,
    component: <CalcNumbers />,
  }, {
    sort: 3,
    component: <CalcDisplay />,
  },
];

const Calculator = () => {
  useEffect(() => {
  }, []);

  const ColProp : ColumnProps = {
    col: {
      id: 'area',
      list: ComponentList,
    },
  };

  const onDragEnd = ({ source, destination } : DropResult) => {
    console.log(source, destination);
  };
  return (
    <div>
      <DragDropContext onDragEnd={ onDragEnd }>
        <div className="drag_columns">
          <Column col={ ColProp.col } key={ ColProp.col.id } />
        </div>

      </DragDropContext>

    </div>
  );
};

export default Calculator;
