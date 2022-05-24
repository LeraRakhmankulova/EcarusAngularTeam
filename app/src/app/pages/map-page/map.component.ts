import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
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
