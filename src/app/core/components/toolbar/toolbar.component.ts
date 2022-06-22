import { MenuItem } from './../../models/menu-item.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title = '';
  @Input() menuItems: MenuItem[] = [];


}
