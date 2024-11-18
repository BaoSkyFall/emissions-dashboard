import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <div [ngClass]="getContainerClasses()" [style.backgroundColor]="background">
      <i [class]="getIconClasses()"></i>
    </div>
  `,
})
export class IconComponent {
  @Input() name: string = '';
  @Input() color: string = '';
  @Input() background: string = '';
  @Input() styleBorder: 'circle' | 'default' = 'default';

  getContainerClasses() {
    return {
      'flex items-center justify-center': true,
      'rounded-full p-3 w-fit	': this.styleBorder === 'circle',
      'p-2 ': this.styleBorder === 'default'
    };
  }

  getIconClasses() {
    return `fa fa-${this.name} text-${this.color}`;
  }
}
