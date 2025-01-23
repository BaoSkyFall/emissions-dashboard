import { createReducer, on } from '@ngrx/store';
import { EmissionsData } from '../models/emissions.model';
import * as EmissionsActions from './emissions.actions';

export interface EmissionsState {
  emissions: EmissionsData[];
  selectedYear: number;
  totalEmissions: number;
  loading: boolean;
  error: any;
}

export const initialState: EmissionsState = {
  emissions: [],
  selectedYear: 2024,
  totalEmissions: 0,
  loading: false,
  error: null
};

export const emissionsReducer = createReducer(
  initialState,

  on(EmissionsActions.loadEmissions, (state, { year }) => ({
    ...state,
    loading: true,
    selectedYear: year
  })),

  on(EmissionsActions.loadEmissionsSuccess, (state, { emissions }) => ({
    ...state,
    loading: false,
    emissions,
    totalEmissions: emissions.reduce((sum, emission) => sum + emission.value, 0),
    error: null
  })),

  on(EmissionsActions.loadEmissionsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
