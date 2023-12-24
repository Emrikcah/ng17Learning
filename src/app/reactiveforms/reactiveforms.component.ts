import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [CommonModule, ReactiveformsComponent, ReactiveFormsModule],
  template: `
    <div class="flex flex-col justify-center items-center ">
      <h1 class="text-[#1dcdbc] text-6xl mb-5">Reactive Forms</h1>
      <form
        [formGroup]="userForm"
        (ngSubmit)="onSubmit()"
        class="mb-2 space-y-3 flex flex-col items-center w-[800px]"
      >
        <!-- input -->
        <div class="w-full max-w-4xl">
          <input
            type="text"
            class="input input-bordered w-full  "
            placeholder="name"
            formControlName="fullName"
            [ngClass]="{
              'border-red-500 mb-2':
                userForm.controls.fullName.invalid &&
                (FullName.dirty || FullName.touched)
            }"
          />
          <!-- error message -->
          @if(userForm.controls['fullName'].touched &&
          userForm.controls['fullName'].invalid){
          <div role="alert" class="alert alert-error rounded-md ">
            <div *ngIf="FullName?.errors?.['required']">
              Your name is required
            </div>
            <div *ngIf="userForm.controls?.['fullName']?.errors?.['minlength']">
              Your name must be at least 5 characters
            </div>
          </div>
          }
          <!-- end error message -->
        </div>
        <!-- end input -->
        <!-- email -->
        <div class="w-full max-w-4xl">
          <input
            type="email"
            class="input input-bordered w-full "
            placeholder="email"
            formControlName="email"
            [ngClass]="{
              'border-red-500 mb-2':
                Email.invalid && (Email.dirty || Email.touched)
            }"
          />
          <!-- error message -->
          @if(userForm.controls['email'].touched &&
          userForm.controls['email'].invalid){
          <div role="alert" class="alert alert-error rounded-md ">
            <div *ngIf="Email?.errors?.['required']">
              Your email is required
            </div>
            <div *ngIf="userForm.controls?.['email']?.errors?.['email']">
              Invalid Email: example&#64;abc.com
            </div>
          </div>
          }
          <!-- end error message -->
        </div>
        <!-- end email -->
        <!-- nested form group -->
        
        <!-- end nested formgroup -->

        <button
          class="btn btn-accent btn-wide mt-5"
          [disabled]="userForm.invalid"
        >
          Submit
        </button>
      </form>
    </div>
  `,
  styles: ``,
})
export class ReactiveformsComponent {
  userForm: any;
  //I dont need this when using reactive forms. see email property below
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  contactRegex: string ="[789][0-9]{9}"
  /**
   *
   */
  constructor() {
    //formgroup represents the controls
    //connect this instance of formgroup to the form using userForm variable
    this.userForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required, //Validators.pattern(this.emailRegex),
        Validators.email,
      ]),
      //nested form group
      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl('',Validators.required),
        contactNo: new FormControl('',[
          Validators.required,Validators.pattern(this.contactRegex)
        ]),
      }),
    });
  }

  get FullName() {
    return this.userForm.get('fullName');
  }
  get Email() {
    return this.userForm.get('email');
  }
  get Address() {
    return this.userForm.get('address');
  }
  get ShippingAddress() {
    return this.userForm.get('contactDetails.shippingAddress');
  }
  //ger the formgroups value
  onSubmit() {
    console.log(this.userForm.value);
  }
}
//Note: plz pay attention to the relationship the getters have with the properties in ngClass and the @if and ngIf statements
//without the getters the references fullName and email etc to a form control would not work. so getter gets the reference from formcontrolname?
//i would have to write the longhand form of  userForm.controls.email.invalid etc on ngClass
/**In reactive forms in Angular, the get method is commonly used to retrieve a reference to a specific form control or form group within your form. Specifically, the get method is used to access a FormControl or FormGroup instance within a FormGroup.
   * 
   * This get method is defining a getter named fullName. This getter is used to retrieve the FormControl associated with the "fullName" form control in the userForm FormGroup.

Here are a few reasons why you might use this approach:

Abstraction and Encapsulation:

It provides an abstraction layer. Instead of accessing the form control directly throughout your component, you use fullName to get a reference to it. This can be beneficial for encapsulation and making your component's logic more modular.
Readability and Maintainability:

It makes the code more readable and self-explanatory. If you need to make changes to how the form control is accessed or if you change the structure of your form, you only need to update it in one place (the get method).
Consistency:

It provides a consistent way to access form controls. If you have multiple places in your component where you need to access the "fullName" form control, using the get method ensures that you're always accessing it in the same way.
   */

//in template driven ngModel #fullName = 'ngModel' on the input is whats used to create a control instance
/**In Angular's reactive forms, the name attribute on the HTML input element is not required. The primary identifier for form controls in reactive forms is the formControlName directive, which associates the input with a specific control in the form. */

/**
 * 
 * <div formGroupName='contactDetails'>
          <!--  address -->
          <div class="w-full max-w-4xl">
            <label> Address</label>
            <textarea
              class="textarea textarea-bordered w-full "
              placeholder="address"
              cols="40"
              rows="10"
              formControlName="address"
              [ngClass]="{
                'border-red-500 mb-2':
                  Address.invalid && (Address.dirty || Address.touched)
              }"
            ></textarea>
            <!-- error message -->
            @if(Address.touched && Address.invalid){
            <div role="alert" class="alert alert-error rounded-md ">
              <div *ngIf="userForm.controls?.['address']?.errors?.['required']">
                Your address is required
              </div>
            </div>
            }
            <!-- end error message -->
          </div>
          <!-- end  address -->
          <!-- shipping address -->
          <div class="w-full max-w-4xl">
            <label>Shipping Address</label>
            <textarea
              class="textarea textarea-bordered w-full "
              placeholder="shipping address"
              cols="40"
              rows="10"
              formControlName="shippingAddress"
              [ngClass]="{
                'border-red-500 mb-2':
                  Address.invalid && (Address.dirty || Address.touched)
              }"
            ></textarea>
            <!-- error message -->
            @if(Address.touched && Address.invalid){
            <div role="alert" class="alert alert-error rounded-md ">
              <div *ngIf="userForm.controls?.['address']?.errors?.['required']">
                Your address is required
              </div>
            </div>
            }
            <!-- end error message -->
          </div>
          <!-- end shipping address -->
          <!-- contact number -->
          <div class="w-full max-w-4xl">
            <label for="">contact number</label>
            <input
              type="text"
              class="input input-bordered w-full "
              placeholder="contact no"
              formControlName="contactNo"
              [ngClass]="{
                'border-red-500 mb-2':
                  Email.invalid && (Email.dirty || Email.touched)
              }"
            />
            <!-- error message -->
            @if(userForm.controls['email'].touched &&
            userForm.controls['email'].invalid){
            <div role="alert" class="alert alert-error rounded-md ">
              <div *ngIf="Email?.errors?.['required']">
                Your email is required
              </div>
              <div *ngIf="userForm.controls?.['email']?.errors?.['email']">
                Invalid Email: example&#64;abc.com
              </div>
            </div>
            }
            <!-- end error message -->
          </div>
          <!-- end contact number -->
        </div>
 * 
 * 
 * 
 */
