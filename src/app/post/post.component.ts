import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PostListComponent],
  template: `
    <div class="border  border-red-600">
      <h1 class="">{{ title }}</h1>
      <h3>Share data between components</h3>
      <h4>{{ fromParent }}</h4>

      <p class="text-red-400">Parent to child via @input decorator</p>
      <p>Child to parent via @output decorator</p>
      <p>
        Child to parent when there is an Event, using @Output decorator and
        event emitter
      </p>
      <p>And @viewchild</p>
    </div>
    <div>
      <app-post-list [fromPostParent]="postParentMessage"></app-post-list>
    </div>
    <button (click)="sendMsg()" class="btn btn-neutral">Click</button>
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
  postChildMessage:string=' from post to app component';

  //used with messageEvent
  //emitting this message in app compo
  outPutChildMsg:string =" Message from post component Via output";

  // w/out assigning this an empty string i would get this error: Property 'fromParent' has no initializer and is not definitely assigned in the constructor.ts(2564)
  @Input() fromParent: string = 'Not implemented';

  //output is usaually associate with a user action
  //used with sendMsg
  @Output() messageEvent = new EventEmitter<string>();


  /**Methods */
  sendMsg(){
   this.messageEvent.emit(this.outPutChildMsg);
    
  }
}
