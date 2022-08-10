export interface IPositionMobile {
  initialValue: any;
  values: any;
  addPosition(value: any): void;
  deletePosition(index: number): void;
  duplicatePosition(index: number): void;
  pushPosit(position: string[]): void;
}
