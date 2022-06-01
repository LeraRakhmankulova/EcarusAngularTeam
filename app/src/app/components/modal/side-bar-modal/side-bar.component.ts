import { animate, style, transition, trigger } from '@angular/animations';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openSideBar', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SideBarComponent extends CdkDialogContainer {
  portal?: Portal<any>;
}
