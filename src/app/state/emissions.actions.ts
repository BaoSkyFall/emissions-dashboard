export class LoadEmissions {
  static readonly type = '[Emissions] Load';
}

export class FilterByYear {
  constructor(public year: number) {}
  static readonly type = '[Emissions] Filter';
}

