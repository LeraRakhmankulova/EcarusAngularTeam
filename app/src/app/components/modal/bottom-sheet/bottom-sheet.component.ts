import { animate, style, transition, trigger } from '@angular/animations';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openBottomSheet', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('400ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class BottomSheetComponent extends CdkDialogContainer {
  portal?: Portal<any>;
}
