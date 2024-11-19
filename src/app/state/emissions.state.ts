// emissions.state.ts
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { EmissionsData } from '../models/emissions.model';
import { tap } from 'rxjs/operators';
import { EmissionsService } from './emissions.service';
import { ChangeYear } from './emissions.actions';
export class LoadEmissions {
  static readonly type = '[Emissions] Load';
  constructor(public year: number) {}
}

export interface EmissionsStateModel {
  emissions: EmissionsData[];
  selectedYear: number;
  totalEmissions: number;
  loading: boolean;
  error: any
}
@State<EmissionsStateModel>({
  name: 'emissions',
  defaults: {
    emissions: [],
    selectedYear: 2024,
    totalEmissions: 0,
    loading: false,
    error: null
  }
})
@Injectable()
export class EmissionsState {
  constructor(private emissionsService: EmissionsService) {}

  @Selector()
  static getEmissions(state: EmissionsStateModel) {
    return state.emissions;
  }

  @Selector()
  static isLoading(state: EmissionsStateModel) {
    return state.loading;
  }
  @Selector()
  static getSelectedYear(state: EmissionsStateModel) {
    return state.selectedYear;
  }

  @Selector()
  static getTotalEmissions(state: EmissionsStateModel) {
    return state.totalEmissions;
  }
  @Action(ChangeYear)
  changeYear(ctx: StateContext<EmissionsStateModel>, action: ChangeYear) {
    return ctx.dispatch(new LoadEmissions(action.year));
  }
  @Action(LoadEmissions)
  loadEmissions(ctx: StateContext<EmissionsStateModel>, action: LoadEmissions) {
    ctx.patchState({ loading: true });

    return this.emissionsService.getEmissionsData(action.year).pipe(
      tap(
        (data) => {
          const total = this.calculateTotal(data);
          ctx.patchState({
            emissions: data,
            selectedYear: action.year,
            totalEmissions: total,
            loading: false,
            error: null
          });
        },
        (error) => {
          ctx.patchState({
            loading: false,
            error: 'Failed to load emissions data'
          });
        }
      )
    );
  }
  private calculateTotal(emissions: EmissionsData[]): number {
    return emissions.reduce((sum, emission) => sum + emission.value, 0);
  }
}
