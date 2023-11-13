import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classbinding',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="text-red">
      classbinding works!
    </p>
    <h1 [class.text-blue] = "bool">classbinding with regular css classes</h1>
    <h1 [class.text-orange-700] = "bool">class binding with tailwind</h1>
  `,
  styles: [`
    .text-red{
      color: red;
    }

    .text-blue{
      color: blue;
    }
  `]
})
export class ClassbindingComponent {
  bool:boolean = true;

}
