import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './Map.component.html',
  styleUrls: ['./Map.component.sass'],
})
export class MapComponent implements AfterViewInit {

  map: any;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([55.7887, 49.1221], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 12,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.accessToken,
    }).addTo(this.map);

    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo([position.latitude, position.longitude], 13);

        const icon = L.icon({
          iconUrl: 'assets/images/marker-icon.png',
          shadowUrl: 'assets/images/marker-shadow.png',
          popupAnchor: [13, 0],
        });

        const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
        marker.addTo(this.map);
      });
  }

}
