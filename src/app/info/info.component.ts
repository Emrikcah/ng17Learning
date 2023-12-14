import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h1 class="text-5xl">Directive Types</h1>
      <p>Component Directive - directive with a template view</p>
      <p>Structural  - which can change the dom layout by adding and removing dom elements.</p>
      <p>Attribute - which can change the apperance or behavior of a dom element, Component or another directive. Examples: ngstyle, ngclass</p>
      <p>Custom - which can create our custom directive from scratch</p>
      <p>Structural- we can manipulate the dom by adding and removing html elements to the dom</p>
      <p>Attribute -we can only change the apperance of the dom</p>
      <h1 class="text-5xl">Services</h1>
      <p>Simply we use angular services to share data and common methods among compnents wheter there is a relaionship between components or not</p>

    </section>
  `,
  styles: `
  
  `
})
export class InfoComponent {

}
