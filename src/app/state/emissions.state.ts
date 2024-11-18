import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { EmissionsData } from '../models/emissions.model';

export class LoadEmissions {
  static readonly type = '[Emissions] Load';
  constructor(public year: number) {}
}

export interface EmissionsStateModel {
  emissions: EmissionsData[];
  selectedYear: number;
}

@State<EmissionsStateModel>({
  name: 'emissions',
  defaults: {
    emissions: [],
    selectedYear: 2024
  }
})
@Injectable()
export class EmissionsState {
  @Selector()
  static getEmissions(state: EmissionsStateModel) {
    return state.emissions;
  }

  @Action(LoadEmissions)
  loadEmissions(ctx: StateContext<EmissionsStateModel>, action: LoadEmissions) {
    // Mock data
    const mockData: EmissionsData[] = [
      { id: '1', type: 'Scope1', value: 24000, unit: 'tCO2e', year: action.year },
      { id: '2', type: 'Scope2', value: 18000, unit: 'tCO2e', year: action.year },
      { id: '3', type: 'Scope3', value: 12000, unit: 'tCO2e', year: action.year }
    ];

    ctx.patchState({
      emissions: mockData,
      selectedYear: action.year
    });
  }
}
