export interface IPositionMobileForm {
  closeForm(): void;
  initialValue: any;
  values: any;
  pushPosit(position: string[]): void;
  renderPattern(values: any): void;
}
