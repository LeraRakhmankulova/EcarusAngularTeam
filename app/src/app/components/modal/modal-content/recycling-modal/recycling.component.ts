import { DialogRef } from '@angular/cdk-experimental/dialog';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PointsService } from '@services/points.service';

@Component({
  selector: 'app-recycling',
  templateUrl: './recycling.component.html',
  styleUrls: ['./recycling.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecyclingComponent{
  points$ = this.pointsService.points$

  constructor(private dialogRef: DialogRef<RecyclingComponent>, private pointsService: PointsService) { }

  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
}
