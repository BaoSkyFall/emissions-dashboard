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
      am5percent.PieChart.new(this.root, {
        radius: am5.percent(90),
        innerRadius: am5.percent(40)
      })
    );

    const series = this.chart.series.push(
      am5percent.PieSeries.new(this.root, {
        valueField: "value",
        categoryField: "type",
        alignLabels: false,
        innerRadius: am5.percent(40)
      })
    );

    // Add subtitle
    let totalLabel = series.children.push(
      am5.Label.new(this.root, {
        text: this.subtitle,
        textAlign: "center",
        width: am5.percent(60),
        centerX: am5.percent(50),
        centerY: am5.percent(70),
        fontSize: 18,
        fill: am5.color(0x64748B)
      })
    );

    // Add title
    let valueLabel = series.children.push(
      am5.Label.new(this.root, {
        text: this.title,
        textAlign: "center",
        width: am5.percent(60),
        centerX: am5.percent(50),
        centerY: am5.percent(10),
        fontSize: 20,
        fontWeight: "600"
      })
    );

    series.slices.template.setAll({
      stroke: am5.color(0xffffff),
      strokeWidth: 2
    });

    series.labels.template.setAll({
      fontSize: 12,
      text: "{valuePercentTotal.formatNumber('#.0')}%",
      inside: true,
      radius: 50,
      fill: am5.color(0xffffff),

    });

    series.data.setAll(this.data);
 }
}
