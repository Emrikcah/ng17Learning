import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <form class="space-y-3 flex flex-col items-center w-[400px]">
        <h1 [class.hello]="addBackground" class="text-gray-300 text-5xl">
          Post Form
        </h1>
        <input
          [(ngModel)]="postTitle"
          name="title"
          type="text"
          placeholder="Post title"
          class="input input-bordered w-full max-w-xs"
        />
        <textarea
          [(ngModel)]="postDetails"
          name="details"
          class="textarea textarea-bordered "
          placeholder="Bio"
        ></textarea>
        <input
          [(ngModel)]="postImg"
          type="text"
          name="img"
          placeholder="Image"
          class="input input-bordered w-full max-w-xs"
        />
        <input
          [(ngModel)]="randomstuff"
          type="text"
          name="rando"
          placeholder="Random stuff"
          class="input input-bordered w-full max-w-xs"
        />
        <input type="checkbox" [(ngModel)]="addBackground" name="check" />Add
        Background
      </form>

      <div>
        <p>{{ postTitle }}</p>
        <p>{{ postDetails }}</p>
        <img [src]="postImg" alt="" />
        <a [href]="randomstuff" target="_blank">More Detail</a>
      </div>
    </section>
  `,
  styles: `
  
 `,
})
export class TaskoneComponent {
  postTitle: string = '';
  postDetails: string = '';
  postImg: string = '';
  randomstuff: string = '';
  addBackground: boolean = false;
}
