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
    sort: 0,
    component: <CalcDisplay />,
  },
  {
    sort: 1,
    component: <CalcOperations />,
  },
  {
    sort: 2,
    component: <CalcNumbers />,
  },
  {
    sort: 3,
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
  list: CalcPartial[],
  placeholder?: CalcPartial[],
}

export interface PropCalc {
  [index: string]: PropCalcItem,
}

const initialState: CalculatorState = {
  isEditMode: true,
  structure: {
    arialSource: {
      id: 'arialSource',
      list: ComponentList,
      placeholder: ComponentList,
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
    deleteFromCalculator: (state, action: PayloadAction<number>) => {
      const temElem: CalcPartial | undefined = state.structure.arialTarget.list.find((f) => f.sort === action.payload);
      state.structure.arialTarget.list = state.structure.arialTarget.list.filter((f) => f.sort !== action.payload);
      state.structure.arialSource.list.push(temElem!);
      state.structure.arialSource.list.sort((o1, o2) => {
        return (o1.sort < o2.sort) ? -1 : 0;
      });
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
      //обеспечим появление дисплея строго в первой позиции 0-- id компонента displayCalc
      if (state.structure.arialTarget.list.some((s) => s.sort === 0)) {
        if (state.structure.arialTarget.list[0].sort !== 0) {
          const displayIndex = state.structure.arialTarget.list.findIndex(s => s.sort === 0);
          const temp = state.structure.arialTarget.list.splice(displayIndex, 1)[0];
          state.structure.arialTarget.list.splice(0, 0, temp);
        }
      }
    },
  },
});
export const {
  toggleEditMode,
  deleteFromCalculator,
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
