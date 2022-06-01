import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recycling',
  templateUrl: './recycling.component.html',
  styleUrls: ['./recycling.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecyclingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
