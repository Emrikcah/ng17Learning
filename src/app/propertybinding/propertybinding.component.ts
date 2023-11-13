import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propertybinding',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      propertybinding works!
    </p>
    <!-- string interpolation -->
    <img src="{{imgUrl}}" alt="">
    <!-- Property Binding -->
   <img [src]="imgUrl" alt="">
  `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {

  //coming from db example
  //bind this property in the html template
  imgUrl: string = 'https://m.media-amazon.com/images/I/71oJYpIX9oL._AC_SX679_.jpg';

}
