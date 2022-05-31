import { CdkDialogContainer, DialogRef } from '@angular/cdk-experimental/dialog';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetComponent{

  constructor( 
    private dialogRef: DialogRef<BottomSheetComponent>,) {
    }

  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
}