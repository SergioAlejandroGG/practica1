import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
title = 'my-first-project';
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ducimus aliquam, saepe ex quasi iste delectus aspernatur quis, mollitia minima laboriosam et ipsa quidem alias in. Ab distinctio voluptate laudantium."
card = {
  title: 'Titulo principal',
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ducimus aliquam, saepe ex quasi iste delectus aspernatur quis, mollitia minima laboriosam et ipsa quidem alias in. Ab distinctio voluptate laudantium." 
}
}
