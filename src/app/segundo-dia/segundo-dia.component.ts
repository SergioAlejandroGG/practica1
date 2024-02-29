import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {
variable=''
// user = [
//   (
//     name: 'luis 1',
//     description: 'descrp 1'
//   )
//   (
//     name: 'luis 2',
//     description: 'descrp 2'
//   )
//   (
//     name: 'luis 3',
//     description: 'descrp 3'
//   )
// ]

}
