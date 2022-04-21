import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent {

  @Input() title: string;
  @Input() text: string ;
  @Input() image: string;
  
  constructor() {
    this.title ="";
		this.text ="";
    this.image ="";
   }

  getTitle(){
    return this.title;
  }

}
