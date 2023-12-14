import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classbinding',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <p class="text-red">classbinding works!</p>
      <h1 [class.text-blue]="bool">classbinding with regular css classes</h1>
      <h1 [class.text-orange-700]="bool">class binding with tailwind</h1>

      <h2
        [style.color]="bool2 ? 'red' : 'pink'"
        (click)="changeTextColor()"
        class="cursor-pointer w-40 "
      >
        Style Binding
      </h2>
    </section>
  `,
  styles: [
    `
      .text-red {
        color: red;
      }

      .text-blue {
        color: blue;
      }
    `,
  ],
})
export class ClassbindingComponent {
  bool: boolean = true;
  bool2: boolean = true;

  //methods
  changeTextColor() {
    this.bool2 = !this.bool2;
  }
}
