import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent implements OnInit {

  @Input() Width: any;
  @Input() Height: any;

  constructor() { }

  ngOnInit(): void {
  }

  getLoadingStyles(){
    const loadingStyles = {
      'width.px' : this.Width ? this.Width : '',
      'height.px' : this.Height ? this.Height : '',
    }
    return loadingStyles;
  }
}
