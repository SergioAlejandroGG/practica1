import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})


export class ProyectoFinalComponent {

  mapOptions: google.maps.MapOptions = {
    center: { lat: 25.788416, lng: -108.986368 },
    zoom : 14
 }
 marker = {
    position: { lat: 25.788416, lng: -108.986368 },
 }



}
