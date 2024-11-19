import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EmissionsState, LoadEmissions } from '../state/emissions.state';
import { EmissionsData } from '../models/emissions.model';

@Component({
  selector: 'app-dashboard',
  templateUrl:"./dashboard.component.html",
 styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  @Select(EmissionsState.getEmissions) emissions$!: Observable<EmissionsData[]>;
  scopeData: any[] = [
    {
      color: '#00D1FF',
      title: 'Scope 1 (tCO₂e)',
      value: 24000
    },
    {
      color: '#34C759',
      title: 'Scope 2 (tCO₂e)',
      value: 4800
    },
    {
      color: '#007AFF',
      title: 'Scope 3 (tCO₂e)',
      value: 0
    }
  ];
  years = [2023, 2024];
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
    this.store.dispatch(new LoadEmissions(this.selectedYear));
  }
}
