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
