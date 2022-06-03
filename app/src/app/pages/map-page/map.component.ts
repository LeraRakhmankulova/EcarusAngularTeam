import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MaterialsComponent } from '@components/modal/modal-content/materials-modal/materials.component';
import { RecyclingComponent } from '@components/modal/modal-content/recycling-modal/recycling.component';
import { DialogService } from '@services/dialog.service';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent implements OnInit{
  points$ = this.pointsService.points$
  selected = 0;
  loadingContent: boolean = true;

  constructor(private dialog: DialogService, 
    private pointsService: PointsService, 
    private cdr: ChangeDetectorRef) {
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.loadingContent = false;
      this.cdr.markForCheck();
    }, 3500);
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
