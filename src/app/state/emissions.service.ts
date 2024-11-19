// emissions.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { EmissionsData } from '../models/emissions.model';

@Injectable({
  providedIn: 'root'
})
export class EmissionsService {
  // You could use this API if you want real (though not emissions) data
  // private readonly API_URL = 'https://api.eia.gov/v2/co2-emissions/data';

  constructor() {}

  getEmissionsData(year: number): Observable<EmissionsData[]> {
    // Simulate API latency
    return of(this.generateMockData(year)).pipe(
      delay(800)  // Add realistic API delay
    );
  }

  private generateMockData(year: number): EmissionsData[] {
    // Generate more realistic data with yearly variations
    const baseValues = {
      scope1: 24000 + Math.random() * 5000,
      scope2: 18000 + Math.random() * 3000,
      scope3: 12000 + Math.random() * 8000
    };

    // Add yearly trend (emissions typically decrease year over year)
    const yearFactor = year === 2024 ? 1 : 1.15;  // 2023 has 15% more emissions

    return [
      {
        id: '1',
        type: 'Scope1',
        value: Math.round(baseValues.scope1 * yearFactor),
        unit: 'tCO2e',
        year: year,
        category: 'Direct Emissions',
        source: 'Company Facilities'
      },
      {
        id: '2',
        type: 'Scope2',
        value: Math.round(baseValues.scope2 * yearFactor),
        unit: 'tCO2e',
        year: year,
        category: 'Indirect Emissions',
        source: 'Purchased Energy'
      },
      {
        id: '3',
        type: 'Scope3',
        value: Math.round(baseValues.scope3 * yearFactor),
        unit: 'tCO2e',
        year: year,
        category: 'Value Chain Emissions',
        source: 'Business Travel'
      }
    ];
  }
}
