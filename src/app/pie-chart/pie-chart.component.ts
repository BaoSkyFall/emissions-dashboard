import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import { EmissionsData } from '../models/emissions.model';

@Component({
  selector: 'app-pie-chart',
  template: '<div id="chartDiv" style="width: 100%; height: 500px;"></div>'
})
export class PieChartComponent implements OnInit, OnDestroy {
  @Input() data: EmissionsData[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';

  private root!: am5.Root;
  private chart!: am5percent.PieChart;

  ngOnInit() {
    this.createChart();
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

  private createChart() {
    this.root = am5.Root.new("chartDiv");
    this.chart = this.root.container.children.push(
      am5percent.PieChart.new(this.root, {})
    );

    const series = this.chart.series.push(
      am5percent.PieSeries.new(this.root, {
        valueField: "value",
        categoryField: "type"
      })
    );

    series.data.setAll(this.data);

    // Add title
    this.chart.children.unshift(
      am5.Label.new(this.root, {
        text: this.title,
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 0
      })
    );
  }
}
