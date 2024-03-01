import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ExampleServiceService } from '../service/example-service.service';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule,ReactiveFormsModule,FormsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})


export class ProyectoFinalComponent {

  name = '';
  users: any = []

  constructor(public ExampleService: ExampleServiceService){
  
  }

  fname (text: any){
    console.log(text)
    return text

  }

  mapOptions: google.maps.MapOptions = {
    center: { lat: 25.788416, lng: -108.986368 },
    zoom : 14
 }
 marker = {
    position: { lat: 25.788416, lng: -108.986368 },
 }





}
