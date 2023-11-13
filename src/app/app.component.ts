import { Component,ViewChild,AfterViewInit,AfterContentChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './nav/nav.component'
import { PostComponent } from './post/post.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavComponent,PostComponent,PropertybindingComponent,ClassbindingComponent],
  template: `
   <h1 class="text-2xl">App Component</h1>
   <h2>Share datt between child components to parent</h2>
   <p>child to parent via &#64;viewchild</p>
   <p>{{msgFromPostToAppCompo}}</p>
   
   
   <app-nav></app-nav>
   <!-- bind event emitter to post compo -->
   <app-post [fromParent]='parentMessage' (messageEvent)="reciveMessage($event)"></app-post>
   <p *ngIf="showOutput">{{fromPostOutput}}</p>

   <app-propertybinding></app-propertybinding>
   <app-classbinding></app-classbinding>

   
   
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title = 'nglearning';
  //send to post compo
  parentMessage: string ="Message from the AppComponent thanks";
  //coming from post compo
  msgFromPostToAppCompo:string='';
  //from post compo via @output
  fromPostOutput:string ='';
  
  //for button in post compo
  showOutput:boolean = false;//controls visibility on click

  

  //coming from post compo
  @ViewChild(PostComponent) postChildComp : PostComponent | undefined;

  /**
   *this runs immediately
   */
  constructor() {
    
    
  }

  /**Methods */
  reciveMessage($event:string){
    this.fromPostOutput = $event;
    this.showOutput = !this.showOutput;
    
  }

  ngAfterContentChecked(): void {
    
    if (this.postChildComp) {
      this.msgFromPostToAppCompo = this.postChildComp.postChildMessage;
    }
      
  }
}
