import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './MapPage.component.html',
  styleUrls: ['./MapPage.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent {
  points$ = this.pointsService.points$
  selected = 0;

  constructor(private pointsService: PointsService) {
  }

  onChange(count: number) {
    this.selected = count;
  }

}
