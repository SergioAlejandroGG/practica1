import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';

 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerDiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}
dinamico = 'la variable de hijo soy yo'  
}

