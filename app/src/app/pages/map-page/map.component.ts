import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialsComponent } from '@components/modal/materials-modal/materials.component';
import { RecyclingComponent } from '@components/modal/recycling-modal/recycling.component';
import { DialogService } from '@services/dialog.service';
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

  constructor(private dialog: DialogService,
              private pointsService: PointsService) {
  }

  onChange(count: number) {
    this.selected = count;
  }
  openBottomSheet(){
    this.dialog.openBottomSheet(MaterialsComponent, {}); 
  }
  openBottomSheetPoints(){
    this.dialog.openBottomSheet(RecyclingComponent, {}); 
  }
}
