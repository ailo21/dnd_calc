import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { CalcPartial } from './model/CalcPartial';
import CalcEqual from './components/CalcEqual';
import CalcNumbers from './components/CalcNumbers';
import CalcDisplay from './components/CalcDisplay';
import { RootState } from '../../app/store';

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

export interface CalculatorState {
  isEditMode : boolean,
  structure : PropCalc
}

export interface PropCalc {
  [index : string] : any,

  arialSource : {
    id : 'arialSource',
    list : CalcPartial[]
  },
  arialTarget : {
    id : 'arialTarget',
    list : CalcPartial[]
  },
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
  },
});
export const {
  toggleEditMode,
} = calculatorSlice.actions;

export const selectStructure = (state : RootState) => state.calculator.structure;
export const selectEditMode = (state : RootState) => state.calculator.isEditMode;

export default calculatorSlice.reducer;