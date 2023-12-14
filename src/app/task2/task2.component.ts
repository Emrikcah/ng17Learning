import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ITemplateForm } from '../interfaces/itemplate-form';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <h1 class="text-blue-400 text-5xl">Template driven forms</h1>
      <form
        #f="ngForm"
        (ngSubmit)="onSubmit(f)"
        class="mb-2 space-y-3 flex flex-col items-center w-[400px]"
      >
        <!-- input -->
        <div class="w-full max-w-xs">
          <input
            ngModel
            type="text"
            class="input input-bordered w-full max-w-xs "
            [ngClass]="{
              'border-red-500 mb-2':
                nameInput.invalid && (nameInput.dirty || nameInput.touched)
            }"
            name="fullname"
            placeholder="name"
            #nameInput="ngModel"
            (change)="getValue(nameInput)"
            required
            minlength="5"
            maxlength="10"
          />
          <!-- nameInput is the template variable above -->
          <!-- h4 on the div and svg && flex justify-start items-center rounded-md on the div are custom styles -->
          <div *ngIf=" nameInput.errors?.['required']">
            <div
              *ngIf="nameInput.invalid && nameInput.touched"
              role="alert"
              class="alert alert-error h-4 flex justify-start items-center rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>name is required</span>
            </div>
          </div>
          <!-- end first error block -->
          <div *ngIf="nameInput.errors?.['minlength']">
            <div
              *ngIf="nameInput.invalid && nameInput.touched"
              role="alert"
              class="alert alert-error h-4 flex justify-start items-center rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Name must be atleast 5 characters</span>
            </div>
          </div>
          <!-- end second error block -->
        </div>
        <!-- email -->
        <div class="w-full max-w-xs">
          <input
            ngModel
            type="email"
            class="input input-bordered w-full max-w-xs "
            [ngClass]="{
              'border-red-500 mb-2':
                email.invalid && (email.dirty || email.touched)
            }"
            name="email"
            #email="ngModel"
            placeholder="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
            required
          />
          <div *ngIf=" email.errors?.['required']">
            <div
              *ngIf="email.invalid && email.touched"
              role="alert"
              class="alert alert-error h-4 flex justify-start items-center rounded-md"
            >
              <span>Email is required</span>
            </div>
          </div>
          <!-- end first error block -->
          <div *ngIf="email.errors?.['pattern']">
            <div
              *ngIf="email.invalid && email.touched"
              role="alert"
              class="alert alert-error h-4 flex justify-start items-center rounded-md"
            >
              <span>Invalid Email Address</span>
            </div>
          </div>
          <!-- end second error block -->
        </div>
        <!-- textarea -->
        <div class="w-full max-w-xs">
          <textarea
            ngModel
            #address="ngModel"
            required
            class="textarea textarea-bordered w-full max-w-xs "
            [ngClass]="{
              'border-red-500 mb-2':
                address.invalid && address.touched
            }"
            placeholder="address"
            name="address"
            cols="40"
          ></textarea>

         
          <div *ngIf="address.errors?.['required']">
            <div
              *ngIf="address.invalid && address.touched"
              role="alert"
              class="alert alert-error h-4 flex justify-start items-center rounded-md"
            >
              <span>Address is required!</span>
            </div>
          </div>
          <!-- end second error block -->
        </div>

        <button class="btn btn-outline" (click)="saveMe()" [disabled]="f.invalid">Save Data</button>
      </form>

      @if(objArray.length > 0){

      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            @for(user of objArray; track $index){

            <tr>
              <th>{{ $index + 1 }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.address }}</td>
              <td>
                <button (click)="deleteMe($index)" class="btn btn-warning">
                  Delete
                </button>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
      }@else {
      <p class="text-3xl text-center">No Data to show!</p>
      }
    </section>
  `,
  styles: ``,
})
export class Task2Component {
  //properties
  name: string = '';
  email: string = '';
  address: string = '';

  objArray: ITemplateForm[] = [];

  getValue(f: NgModel) {
    console.log(f);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  //delete data from the array on button click
  deleteMe(i: number) {
    this.objArray.splice(i, 1);
  }
  //push data onto an array
  saveMe() {
    this.objArray.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
  }
}
