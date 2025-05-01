import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
  standalone: false,
})
export class TrackingPage implements AfterViewInit {
  @ViewChild('mapElement', { static: false }) mapElement!: ElementRef;
  map!: google.maps.Map;

  constructor() {}

  async ngAfterViewInit(): Promise<void> {
    const coordinates = await Geolocation.getCurrentPosition();

    const lat = coordinates.coords.latitude;
    const lng = coordinates.coords.longitude;

    const latLng = new google.maps.LatLng(lat, lng);

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: latLng,
      zoom: 15,
    });

    new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'You are here!',
    });
  }

  receivePackage() {
    alert('Package received!');
  }
}
