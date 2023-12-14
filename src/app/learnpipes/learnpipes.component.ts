import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learnpipes',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container text-center space-y-4">
  <h1 class="text-6xl">Pipes</h1>
    <p>
      {{title | uppercase}}
    </p>
    <h1>{{count|number}}</h1>
    <h2>{{decimalValue | number}}</h2>
    <h2>{{price | currency}}</h2>
    <h2>{{today|date:'short'}}</h2>
    <h2>{{.567|percent}}</h2>
  </div>
  `,
  styles: ``
})
export class LearnpipesComponent {
title: string = 'angular course';
count: number = 234532124;
decimalValue: number = 3435356;
price: number = 9999;
today: Date = new Date();
}
