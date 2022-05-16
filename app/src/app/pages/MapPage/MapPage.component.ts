import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './MapPage.component.html',
  styleUrls: ['./MapPage.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent {
  collPoints$ = this.collPointsService.collPoints$
  selected = 0;

  constructor(private collPointsService: PointsService) {
  }

  onChange(count: number) {
    this.selected = count;
  }

}
