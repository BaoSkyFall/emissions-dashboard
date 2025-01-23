import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmissionsState } from './emissions.reducer';

export const selectEmissionsState = createFeatureSelector<EmissionsState>('emissions');

export const selectEmissions = createSelector(
  selectEmissionsState,
  (state: EmissionsState) => state.emissions
);

export const selectLoading = createSelector(
  selectEmissionsState,
  (state: EmissionsState) => state.loading
);

export const selectTotalEmissions = createSelector(
  selectEmissionsState,
  (state: EmissionsState) => state.totalEmissions
);

export const selectSelectedYear = createSelector(
  selectEmissionsState,
  (state: EmissionsState) => state.selectedYear
);

export const selectScopeData = createSelector(
  selectEmissions,
  (emissions) => emissions.map((emission, index) => ({
    color: getScopeColorByIndex(index),
    title: `${emission.type} (${emission.unit})`,
    value: emission.value
  }))
);

function getScopeColorByIndex(index: number): string {
  switch (index) {
    case 0:
      return '#00D1FF';
    case 1:
      return '#34C759';
    case 2:
      return '#007AFF';
    default:
      return '#000000';
  }
}
