export interface IPositionHeader {
  name: string;
  valueLength: number;
  duplicatePosition(): void;
  deletePosition(): void;
}
