import { createAction, props } from '@ngrx/store';
import { EmissionsData } from '../models/emissions.model';

export const loadEmissions = createAction(
  '[Emissions] Load Emissions',
  props<{ year: number }>()
);

export const loadEmissionsSuccess = createAction(
  '[Emissions] Load Emissions Success',
  props<{ emissions: EmissionsData[] }>()
);

export const loadEmissionsFailure = createAction(
  '[Emissions] Load Emissions Failure',
  props<{ error: any }>()
);

export const changeYear = createAction(
  '[Emissions] Change Year',
  props<{ year: number }>()
);

