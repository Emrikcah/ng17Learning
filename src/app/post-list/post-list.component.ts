import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Post list Component</h1>
    <p>{{fromPostParent}}</p>
  `,
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  //reference from post parent
  @Input() fromPostParent:string ='Not implemented';

}
