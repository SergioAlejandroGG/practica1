import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoFinalComponent } from './proyecto-final/proyecto-final.component';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerDiaComponent, SegundoDiaComponent, RouterModule,ProyectoFinalComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}
dinamico = 'la variable de hijo soy yo'  
}