import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scope-item',
  templateUrl: './scope-item.component.html',
  styleUrls: ['./scope-item.component.css']
})
export class ScopeItemComponent {
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() value: number = 0;
}
