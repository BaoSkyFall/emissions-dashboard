import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import { EmissionsData } from '../models/emissions.model';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit, OnDestroy {
  @Input() data: EmissionsData[] = [];
  @Input() title: string | null = '';
  @Input() subtitle: string = '';

   root!: am5.Root;
   chart!: am5percent.PieChart;

  ngOnInit() {
    this.createChart();
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  private handleResize() {
    const width = window.innerWidth;
    this.updateFontSizes(width);
  }

  private getResponsiveFontSize(baseSize: number, width: number,type:string =''): number {
    if (width < 640) { // sm breakpoint
      return type=='label'? baseSize * 0.55  :baseSize * 0.35; // 75% of original size
    } else if (width < 768) { // md breakpoint
      return baseSize * 0.65; // 85% of original size
    } else if (width < 1024) { // lg breakpoint
      return baseSize * 0.75; // 95% of original size
    }
    return baseSize; // original size for larger screens
  }

   updateFontSizes(width: number) {
    if (!this.chart || !this.chart.series.getIndex(0)) return;

    const series = this.chart.series.getIndex(0);

    // Update subtitle font size
    const subtitleLabel = series?.children.getIndex(0) as am5.Label;
    if (subtitleLabel) {
      subtitleLabel.set("fontSize", this.getResponsiveFontSize(18, width));
    }

    // Update title font size
    const titleLabel = series?.children.getIndex(1) as am5.Label;
    if (titleLabel) {
      titleLabel.set("fontSize", this.getResponsiveFontSize(20, width));
    }

    // Update slice labels font size
    series?.labels.template.setAll({
      fontSize: this.getResponsiveFontSize(16, width, 'label')
    });
  }

   createChart() {
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

    series.set("colors", am5.ColorSet.new(this.root, {
      colors: [
        am5.color("#00D1FF"),
        am5.color("#34C759"),
        am5.color("#007AFF")
      ]
    }));

    // Add subtitle with initial font size
    let totalLabel = series.children.push(
      am5.Label.new(this.root, {
        text: this.subtitle,
        textAlign: "center",
        width: am5.percent(60),
        centerX: am5.percent(50),
        centerY: am5.percent(70),
        fontSize: this.getResponsiveFontSize(18, window.innerWidth),
        fill: am5.color(0x64748B)
      })
    );

    // Add title with initial font size
    let valueLabel = series.children.push(
      am5.Label.new(this.root, {
        text: this.title || '',
        textAlign: "center",
        width: am5.percent(60),
        centerX: am5.percent(50),
        centerY: am5.percent(10),
        fontSize: this.getResponsiveFontSize(20, window.innerWidth),
        fontWeight: "600"
      })
    );

    series.slices.template.setAll({
      stroke: am5.color(0xffffff),
      strokeWidth: 2
    });

    series.labels.template.setAll({
      fontSize: this.getResponsiveFontSize(12, window.innerWidth),
      text: "{valuePercentTotal.formatNumber('#.0')}%",
      inside: true,
      radius: 35,
      fill: am5.color(0xffffff)
    });

    series.data.setAll(this.data);
  }
}
