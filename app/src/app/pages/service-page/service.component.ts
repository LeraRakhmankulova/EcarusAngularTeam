import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceComponent implements OnInit {
  homePageUrl = 'hello'
  constructor() { }

  ngOnInit(): void {
  }

}
