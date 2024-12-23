import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { EmissionsState } from './state/emissions.state';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { IconComponent } from './icon/icon.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ScopeItemComponent } from './shared/pipe/components/scope-item/scope-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    NgxsModule.forRoot([EmissionsState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
