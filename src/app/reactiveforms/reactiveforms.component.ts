import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IReactiveForm, ITemplateForm } from '../interfaces/itemplate-form';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="flex justify-center items-center flex-col ">
      <h1 class="text-pink-700 text-5xl mb-6">Reactive Forms</h1>
      <form
        [formGroup]="form"
        class="mb-2 space-y-3 flex flex-col items-center w-[400px]"
      >
        <!-- input -->
        <div class="w-full max-w-xs">
          <input
            formControlName="fullName"
            type="text"
            class="input input-bordered w-full max-w-xs "
            name="fullname"
            placeholder="name"
          />
          @if(fullName.touched && fullName.invalid){
          <div
            role="alert"
            class="alert alert-error h-4 flex justify-start items-center rounded-md"
          >
            @if (fullName.errors?.required){
            <div>Full Name is required....</div>
            }
          </div>
          }
        </div>
        <!-- email -->
        <div class="w-full max-w-xs">
          <input
            formControlName="email"
            type="email"
            class="input input-bordered w-full max-w-xs "
            name="email"
            placeholder="email"
          />
        </div>
        <!-- textarea -->
        <div class="w-full max-w-xs">
          <textarea
            formControlName="address"
            class="textarea textarea-bordered w-full max-w-xs "
            placeholder="address"
            name="address"
            cols="40"
          ></textarea>
        </div>

        <!-- <button class="btn btn-outline" (click)="saveMe()">Save Data</button> -->
      </form>

      <!-- @if(objArray?.length > 0){

      <div class="overflow-x-auto">
        <table class="table">
          
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
      } -->
    </section>
  `,
  styles: ``,
})
export class ReactiveformsComponent {
  form: any;

  /**
   *
   */
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(),
      address: new FormControl(),
    });
  }

  //properties
  fullName: string = '';
  email: string = '';
  address: string = '';

  

  // objArray: ITemplateForm[] = [];

  getValue() {
    console.log();
  }
  onSubmit() {
    console.log();
  }
  //delete data from the array on button click
  // deleteMe(i: number) {
  //   this.objArray.splice(i, 1);
  // }
  //push data onto an array
  // saveMe() {
  //   this.objArray.push({
  //     fullName: this.fullName,
  //     email: this.email,
  //     address: this.address,
  //   });
  // }
}
