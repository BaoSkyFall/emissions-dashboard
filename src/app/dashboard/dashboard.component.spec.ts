import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { NgxsModule, Store } from '@ngxs/store';
import { EmissionsState, LoadEmissions } from '../state/emissions.state';
import { BehaviorSubject, of } from 'rxjs';
import { EmissionsData } from '../models/emissions.model';
// Import Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from '../icon/icon.component';
import { ScopeItemComponent } from '../shared/pipe/components/scope-item/scope-item.component';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store;

  const mockEmissionsData: EmissionsData[] = [
    { id: "1", type: 'Scope 1', value: 22000, unit: 'tCO₂e', year: 2024 },
    { id: "2", type: 'Scope 2', value: 12000, unit: 'tCO₂e' , year: 2024},
    { id: "3", type: 'Scope 3', value: 14000, unit: 'tCO₂e',  year: 2024 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, DonutChartComponent, IconComponent, ScopeItemComponent],
      imports: [
        NgxsModule.forRoot([EmissionsState]),
        MatFormFieldModule,
        MatCardModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule

      ],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy('dispatch'),
            select: jasmine.createSpy('select').and.returnValue(of(mockEmissionsData))
          }
        }
      ]
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  // Test 1: Component Rendering
  it('should create the dashboard component', () => {
    expect(component).toBeTruthy();
    expect(component.selectedYear).toBe(2024);
    expect(component.years).toContain(2024);
    expect(component.years).toContain(2023);
  });

  // Test 2: State Management - Year Selection
  it('should dispatch LoadEmissions action when year is changed', () => {
    const newYear = 2023;
    component.onYearChange(newYear);

    expect(store.dispatch).toHaveBeenCalledWith(new LoadEmissions(newYear));
    expect(component.selectedYear).toBe(newYear);
  });

  // Test 3: State Management - Data Loading
  it('should update scopeData when emissions data changes', () => {
    fixture.detectChanges();
    expect(component.scopeData.length).toBe(3);
    expect(component.scopeData[0].value).toBe(22000);
    expect(component.scopeData[1].value).toBe(12000);
    expect(component.scopeData[2].value).toBe(14000);
  });
});
