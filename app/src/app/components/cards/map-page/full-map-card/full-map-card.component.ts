import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PointsService } from '@services/points.service';

@Component({
  selector: 'app-full-map-card',
  templateUrl: './full-map-card.component.html',
  styleUrls: ['./full-map-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullMapCardComponent implements OnInit {
  points$ = this.pointsService.points$
  id: number = this.activateRoute.snapshot.params['id'];
  point: any = null

  constructor(private pointsService: PointsService, private activateRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.points$
			.getValue()
			.filter((collPoint: any) => (collPoint.id === +this.id))
			.map((point: any) => {
				this.point = point
			})
  }

}
