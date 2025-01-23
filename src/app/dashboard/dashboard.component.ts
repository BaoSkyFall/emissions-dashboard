import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EmissionsActions from '../state/emissions.actions';
import * as EmissionsSelectors from '../state/emissions.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  emissions$ = this.store.select(EmissionsSelectors.selectEmissions);
  scopeData$ = this.store.select(EmissionsSelectors.selectScopeData);


  loading$ = this.store.select(EmissionsSelectors.selectLoading);
  totalEmissions$ = this.store.select(EmissionsSelectors.selectTotalEmissions);
  years = [2021, 2022, 2023, 2024];
  selectedYear = 2024;

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadData();
  }

  onYearChange(year: number) {
    this.selectedYear = year;
    this.loadData();
  }

  private loadData() {
    this.store.dispatch(EmissionsActions.loadEmissions({ year: this.selectedYear }));
  }
}
