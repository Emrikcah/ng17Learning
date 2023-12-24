import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  template: `
    <h1>Ng Blog Site</h1>
    <button routerLink="/posts">Post List</button>
    <router-outlet></router-outlet>
  `,
  styles: ``
})
export class RoutingComponent {

}
