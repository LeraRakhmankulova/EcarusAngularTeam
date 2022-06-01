import { DialogRef } from '@angular/cdk-experimental/dialog';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.sass', 'custom_scroll.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialsComponent implements OnInit {

  @Input() allBr: Array<any>;
  @Input() brand: Array<any>;
  @Input() allTp: Array<any>;
  @Input() materials: Array<any>;

  constructor(private dialogRef: DialogRef<MaterialsComponent>) { 
    this.allBr = [
      {title: "Выбрать все", checked: false}
    ];
    this.allTp = [
      {title: "Выбрать все", checked: false}
    ];
    this.brand = [
      {title: "H&M", checked: false},
      {title: "P&B", checked: false},
      {title: "Adidas", checked: false},
      {title: "Nike", checked: false},
      {title: "Reebok", checked: false},
      {title: "Puma", checked: false},
    ];
    this.materials = [
      {title: "Пластик", checked: false},
      {title: "Обувь", checked: false},
      {title: "Старая одежда", checked: false},
      {title: "Стекло", checked: false},
      {title: "Бумага", checked: false},
      {title: "Металл", checked: false},
      {title: "Батареика", checked: false},
    ];
  }

  ngOnInit(): void {
  }

  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
}
