import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalcPartial, ColumnProps } from './model/CalcPartial';
import CalcEqual from './components/CalcEqual';
import CalcNumbers from './components/CalcNumbers';
import CalcDisplay from './components/CalcDisplay';
import { RootState } from '../../app/store';
import CalcOperations from './components/CalcOperations';

const ComponentList : CalcPartial[] = [
  {
    sort: 1,
    component: <CalcDisplay />,
  },
  {
    sort: 2,
    component: <CalcOperations />,
  },
  {
    sort: 3,
    component: <CalcNumbers />,
  },
  {
    sort: 4,
    component: <CalcEqual />,
  },
];

export interface CalculatorState {
  isEditMode : boolean,
  structure : PropCalc
}

export interface PropCalcItem {
  id : string,
  list : CalcPartial[]
}

export interface PropCalc {
  [index : string] : any,

  arialSource : PropCalcItem,
  arialTarget : PropCalcItem,
}

const initialState : CalculatorState = {
  isEditMode: true,
  structure: {
    arialSource: {
      id: 'arialSource',
      list: ComponentList,
    },
    arialTarget: {
      id: 'arialTarget',
      list: [],
    },
  },
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.isEditMode = !state.isEditMode;
    },
    changeStructure: (state, action : PayloadAction<PropCalc>) => {
      for (const [key] of Object.entries(action.payload)) {
        state.structure[key].list = action.payload[key].list;
      }
    },
  },
});
export const {
  toggleEditMode,
  changeStructure,
} = calculatorSlice.actions;

export const selectStructure = (state : RootState) => state.calculator.structure;
export const selectEditMode = (state : RootState) => state.calculator.isEditMode;

export default calculatorSlice.reducer;