import { Component, OnInit } from '@angular/core';
import {  Select, Store } from '@ngxs/store';
import { filter, Observable } from 'rxjs';
import { EmissionsState, LoadEmissions } from '../state/emissions.state';
import { EmissionsData } from '../models/emissions.model';

@Component({
  selector: 'app-dashboard',
  templateUrl:"./dashboard.component.html",
 styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  @Select(EmissionsState.getEmissions) emissions$!: Observable<EmissionsData[]>;
  @Select(EmissionsState.isLoading) loading$!: Observable<boolean>;
  @Select(EmissionsState.getTotalEmissions) totalEmissions$!: Observable<number>;

  scopeData: any[] = [];
  years = [2021,2022,2023, 2024];
  selectedYear = 2024;

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadData();
    this.emissions$.pipe(
      filter(emissions => emissions.length > 0)
    ).subscribe(emissions => {
      this.scopeData = emissions.map((emission,index) => ({
        color: this.getScopeColorByIndex(index),
        title: `${emission.type} (${emission.unit})`,
        value: emission.value
      }));
    });
  }

  onYearChange(year: number) {
    this.selectedYear = year;
    this.loadData();
  }

  private loadData() {
    this.store.dispatch(new LoadEmissions(this.selectedYear));
  }
  private getScopeColorByIndex(index: number): string {
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
}
