import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { IconComponent } from './icon/icon.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ScopeItemComponent } from './shared/pipe/components/scope-item/scope-item.component';
import { emissionsReducer } from './state/emissions.reducer';
import { EmissionsEffects } from './state/emissions.effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DonutChartComponent,
    IconComponent,
    ScopeItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ emissions: emissionsReducer }),
    EffectsModule.forRoot([EmissionsEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
