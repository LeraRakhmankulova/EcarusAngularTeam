import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-full-map-card',
  templateUrl: './full-map-card.component.html',
  styleUrls: ['./full-map-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullMapCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
