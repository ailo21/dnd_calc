export interface CalcPartial {
  sort : number
  component : JSX.Element
}

export interface ColumnProps {
  col : {
    id : string,
    list? : CalcPartial[]
  }
}