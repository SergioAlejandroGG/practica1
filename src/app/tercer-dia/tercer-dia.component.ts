import { Component } from '@angular/core';
import { ExampleServiceService } from '../service/example-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {
  name = '';
  users: any = []
  constructor(public ExampleService: ExampleServiceService){
  
  }
  ngOnInit() {
    this.ExampleService.obtenerLista().subscribe(resp => {
      console.log(resp);
      this.users = resp;
    })
  }

  editartexto(text:string){
    console.log(text)
    return text
  }
}
