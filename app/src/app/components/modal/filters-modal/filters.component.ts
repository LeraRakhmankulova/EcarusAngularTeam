import { DialogRef } from '@angular/cdk-experimental/dialog';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {

  @Input() gender: Array<any>;
  @Input() type: Array<any>;
  @Input() brand: Array<any>;
  @Input() allTp: Array<any>;
  @Input() allBr: Array<any>;


  constructor(private dialogRef: DialogRef<FiltersComponent>) { 
    this.gender = [
      {title: "Мужской", checked: false},
      {title: "Женский", checked: false},
    ];
    this.type = [
      {title: "Одежда", checked: false},
      {title: "Обувь", checked: false},
      {title: "Аксессуары", checked: false},
    ];
    this.brand = [
      {title: "H&M", checked: false},
      {title: "P&B", checked: false},
      {title: "Adidas", checked: false},
      {title: "Nike", checked: false},
      {title: "Reebok", checked: false},
      {title: "Puma", checked: false},
    ];
    this.allTp = [
      {title: "Выбрать все", checked: false}
    ];
    this.allBr = [
      {title: "Выбрать все", checked: false}
    ]
  }

  ngOnInit(): void {
  }
  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
}
