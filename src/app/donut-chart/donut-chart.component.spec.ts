import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonutChartComponent } from './donut-chart.component';
import { EmissionsData } from '../models/emissions.model';

describe('DonutChartComponent', () => {
  let component: DonutChartComponent;
  let fixture: ComponentFixture<DonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutChartComponent]
    });
    fixture = TestBed.createComponent(DonutChartComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should create the chart', () => {
    component.data = [
      { id: '1', type: 'Scope 1', value: 22000, unit: 'tCO₂e', year: 2024 },
      { id: '2', type: 'Scope 2', value: 12000, unit: 'tCO₂e', year: 2024 },
      { id: '3', type: 'Scope 3', value: 14000, unit: 'tCO₂e', year: 2024 }
    ];
    component.title = 'Test Chart';
    component.subtitle = 'Test Subtitle';
    component.ngOnInit();
    expect(component.chart).toBeTruthy();
    expect(component.chart.series.length).toBe(1);
  });
  it('should update font sizes on resize', () => {
    component.data = [
      { id: '1', type: 'Scope 1', value: 22000, unit: 'tCO₂e', year: 2024 },
      { id: '2', type: 'Scope 2', value: 12000, unit: 'tCO₂e', year: 2024 },
      { id: '3', type: 'Scope 3', value: 14000, unit: 'tCO₂e', year: 2024 }
    ];
    component.title = 'Test Chart';
    component.subtitle = 'Test Subtitle';
    component.ngOnInit();
    spyOn(component, 'updateFontSizes');
    window.dispatchEvent(new Event('resize'));
    expect(component.updateFontSizes).toHaveBeenCalled();
  });

  it('should dispose the chart on component destruction', () => {
    component.data = [
      { id: '1', type: 'Scope 1', value: 22000, unit: 'tCO₂e', year: 2024 },
      { id: '2', type: 'Scope 2', value: 12000, unit: 'tCO₂e', year: 2024 },
      { id: '3', type: 'Scope 3', value: 14000, unit: 'tCO₂e', year: 2024 }
    ];
    component.title = 'Test Chart';
    component.subtitle = 'Test Subtitle';
    component.ngOnInit();
    spyOn(component.root, 'dispose');
    component.ngOnDestroy();
    expect(component.root.dispose).toHaveBeenCalled();
  });
});
