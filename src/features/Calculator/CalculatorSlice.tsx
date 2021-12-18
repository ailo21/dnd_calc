import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalcPartial } from './model/CalcPartial';
import CalcEqual from './components/CalcEqual';
import CalcNumbers from './components/CalcNumbers';
import CalcDisplay from './components/CalcDisplay';
import { RootState } from '../../app/store';
import CalcOperations from './components/CalcOperations';
import { DisplayProp } from './model/DisplayProp';
import { OperationEnum } from './model/OperationEnum';

const ComponentList: CalcPartial[] = [
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
  isEditMode: boolean,
  structure: PropCalc,
  display: DisplayProp
}

export interface PropCalcItem {
  id: string,
  list: CalcPartial[]
}

export interface PropCalc {
  [index: string]: any,

  arialSource: PropCalcItem,
  arialTarget: PropCalcItem,
}

const initialState: CalculatorState = {
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
  display: {
    operand1: undefined,
    operand2: undefined,
    operation: undefined,
    compute: undefined,
    isComputedRes: false,
  } as DisplayProp,
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.isEditMode = !state.isEditMode;
    },
    computedResult: (state) => {
      let result: number = 0;
      const operand1 = state.display.operand1!;
      const operand2 = state.display.operand2!;
      switch (state.display.operation) {
        case OperationEnum.fold:
          result = Number(operand1) + Number(operand2);
          break;
        case OperationEnum.subtract:
          result = Number(operand1) - Number(operand2);
          break;
        case OperationEnum.multiply:
          result = Number(operand1) * Number(operand2);
          break;
        case OperationEnum.division:
          result = Number(operand1) / Number(operand2);
          break;
        default:
          break;
      }
      state.display.compute = result;
      state.display.isComputedRes = true;
    },
    changeStructure: (state, action: PayloadAction<PropCalc>) => {
      for (const [key] of Object.entries(action.payload)) {
        state.structure[key].list = action.payload[key].list;
      }
    },
  },
});
export const {
  toggleEditMode,
  computedResult,
  changeStructure,
} = calculatorSlice.actions;

export const selectStructure = (state: RootState) => state.calculator.structure;
export const selectEditMode = (state: RootState) => state.calculator.isEditMode;

export const selectDisplay = (state: RootState) => {
  let value: string;
  if (state.calculator.display.compute === undefined) {
    value = String(state.calculator.display.operand1 ?? '');
    value += String(state.calculator.display.operation ?? '');
    value += String(state.calculator.display.operand2 ?? '');
  } else {
    value = state.calculator.display.compute.toString();
  }
  return value;
};

export default calculatorSlice.reducer;
