import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../post-list/post-list.component';
import { PostService } from '../Services/post.service';
import {IPost} from '../interfaces/IPost'


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PostListComponent],
  // providers is needed for DI
 // providers: [PostService],
  template: `
    <section class="border  border-red-600">
      <h1 class="text-red-700 font-extrabold text-5xl">{{ title }}</h1>
      <h3>Share data between components</h3>
      <h4>{{ fromParent }}</h4>

      <p class="text-red-400">Parent to child via &#64;input decorator</p>
      <p>Child to parent via &#64;output decorator</p>
      <p>
        Child to parent when there is an Event, using &#64;Output decorator and
        event emitter
      </p>
      <p>And &#64;viewchild</p>
      <h1 class="text-6xl">Use of new for loop</h1>
      @for(post of posts; track post.id){
      <li>{{ post.postTitle }}</li>
      }
    </section>
    <div>
    <app-post-list [fromPostParent]="postParentMessage"></app-post-list>
    <button (click)="sendMsg()" class="btn btn-neutral mr-4 mt-10">Click</button>
    </div>
    
 
  `,
  styles: [],
})
export class PostComponent {
  //property
  title: string = 'Post Component';
  messagePost: string = 'Message from PostComponent';
  // send to post list
  postParentMessage: string = 'Message coming from the post parent';
  //send to app compo via viewchild
  postChildMessage: string = ' from post to app component';

  //used with messageEvent
  //emitting this message in app compo
  outPutChildMsg: string = ' Message from post component Via output';

  // w/out assigning this an empty string i would get this error: Property 'fromParent' has no initializer and is not definitely assigned in the constructor.ts(2564)
  @Input() fromParent: string = 'Not implemented';

  //output is usaually associate with a user action
  //used with sendMsg. redcar can be called anything
  @Output() redcar = new EventEmitter<string>();

  /**Methods */
  //used in app compo
  sendMsg() {
    this.redcar.emit(this.outPutChildMsg);
  }
  //used with the postService
  posts: IPost[];

  /**
   *use DI instead of tying it to a specific component
   */
  
  constructor(private postService: PostService) {
    //creating a service here makes it dependent on this component. Dependency injection is a way to abstract the service and make it reuseable to all
    // let postService = new PostService();
    this.posts = postService.postList;
    
  }
}
