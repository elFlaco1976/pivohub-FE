import Beer from '../types/beer';

export enum SortTypeEnum {
  PercentageAsc = "PERCENTAGEASC",
  ScoreAsc = "SCOREASC",
  Default = "DEFAULT"
}

export class SortType {
  sortTypeEnum: SortTypeEnum;

  sortTypeLabel: string;

  sortFunction: (a: Beer, b: Beer) => number;

  constructor(
    sortTypeEnum: SortTypeEnum,
    sortFunction: (a: Beer, b: Beer) => number,
    sortTypeLabel: string
  ) {
    this.sortTypeEnum = sortTypeEnum;
    this.sortFunction = sortFunction;
    this.sortTypeLabel = sortTypeLabel;
  }
}

export const sortTypes = {
  [SortTypeEnum.Default]: new SortType(SortTypeEnum.Default, null, "Default"),
  [SortTypeEnum.PercentageAsc]: new SortType(
    SortTypeEnum.PercentageAsc,
    (a, b) => a.percentage - b.percentage,
    "Percentage Asc"
  ),
  [SortTypeEnum.ScoreAsc]: new SortType(
    SortTypeEnum.ScoreAsc,
    (a, b) => a.score - b.score,
    "Score Asc"
  ),
};
