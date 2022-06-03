import {Component, Input} from '@angular/core';

@Component({
  selector: 'map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.sass']
})
export class MapCardComponent {
  @Input() collPoint: any = null;
}
