export class LoadEmissions {
  static readonly type = '[Emissions] Load';
}

export class ChangeYear {
  constructor(public year: number) {}
  static readonly type = '[Emissions] Change Year';
}

