import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <h1 class="text-red-500">Binding</h1>
      <p>
        two way data binding bidirectional. can bind data compo to view and vice
        versa
      </p>
      <h3>one way data binding</h3>
      <ul>
        <li>string interpolation</li>
        <li>property binding</li>
        <li>class binding</li>
        <li>style binding</li>
      </ul>
      <h3>Two way data binding</h3>
      <p>Two way Binding</p>

      <!-- event filtering -->
      <input
        #username
        type="text"
        (keyup.enter)="onKeyUp(username.value)"
        class="input input-bordered w-full max-w-xs"
        placeholder="event filtering"
      />
      <!-- two way data binding -->
      <input
        [(ngModel)]="userName"
        (keyup.enter)="newKeyUp()"
        class="input input-bordered w-full max-w-xs"
        placeholder="two way data binding"
      />

      <!-- one way data binding -->
      <input
        [value]="oneWayDataBinding"
        (keyup.enter)="anotherKeyUp()"
        class="input input-bordered w-full max-w-xs"
        placeholder="one way data binding"
      />

      <button (click)="buttonClick()" class="btn btn-primary">
        Event Button
      </button>
    </section>
  `,
  styles: [``],
})
export class EventbindingComponent {
  userName: string = '';
  oneWayDataBinding: string = 'one way data binding compo to view only';

  anotherKeyUp() {
    console.log(this.oneWayDataBinding);
  }

  newKeyUp() {
    console.log(this.userName);
  }

  onKeyUp(username: any) {
    console.log(username);
  }

  buttonClick() {
    throw new Error('Method not implemented.');
  }
}
