import { OperationEnum } from './OperationEnum';

export type DisplayProp = {
  operand1: string | undefined,
  operand2: string | undefined,
  operation: OperationEnum | undefined,
  compute: number | undefined,
  isComputedRes: boolean
};