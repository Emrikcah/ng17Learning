import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from '../interfaces/IPost';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  //the providers array will create a new instance of the service. so any mutations to it will not effect other components that might be using it
  //providers:[PostService],
  template: `
    <section>
      <h1 class="text-red-700 font-extrabold text-5xl">Post list Component</h1>
      <p>{{ fromPostParent }}</p>

      <!-- structural directive ngFor -->
      <ul>
        @for(post of postArray; track $index){

        <li>{{ post }}</li>
        }
      </ul>

      <ul>
        @for(post of objArray;track $index){
        <li>
          {{ $index }}{{ post.postTitle }}
          <button class="btn newbtn" (click)="onDelete(post)">Delete</button>
        </li>
        }
      </ul>
      @if(objArray.length == 0){
      <div>
        <p>No data to show</p>
        <p>be sure to learn ng-template</p>
      </div>
      }

      <button class="btn btn-primary" (click)="addNew()">Push Me</button>
      <p class="text-red-700 font-extrabold text-5xl">
        End post list component
      </p>
    </section>
  `,
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  //reference from post parent
  @Input() fromPostParent: string = 'Not implemented';

  postArray: string[] = ['one', 'two', 'three', 'four'];

  objArray: IPost[];

  //remove an array object from objarray
  onDelete(index: any) {
    console.log(index);

    this.objArray.splice(index, 1);
  }
  addNew() {
    //add to the objArray
    this.objArray.push({
      id: 5,
      postTitle: 'Horse shit!',
    });
  }

  /**
   *DI of post service
   */
  constructor(private postService: PostService) {
    // this.objArray = postService.postList;
    this.objArray = postService.postList
  }
}
