import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
   <h1>Add New Book</h1>
   <form [formGroup]="frm">
   <div class="col-md-5">
        <div class="form-group">
          <input type="text" placeholder="Name" class="form-control" formControlName="name"/>
          <span *ngIf="frm.controls.name.touched && frm.controls.name.errors?.required" class="text-danger">Required</span>
          <span *ngIf="frm.controls.name.touched && frm.controls.name.errors?.minlength" class="text-danger">Min 3 Chars</span>
          <span *ngIf="frm.controls.name.touched && frm.controls.name.errors?.maxlength" class="text-danger">Max 10 Chars</span>
        </div>
        <div class="form-group">
          <input  type="text" placeholder="Author" class="form-control" formControlName="author" />
          <span *ngIf="frm.controls.author.touched && frm.controls.author.errors?.required" class="text-danger">Required</span>  
        </div>
        <div class="form-group">
          <input type="text" required="true" class="form-control" placeholder="Price" formControlName="price"/>
          <span *ngIf="frm.controls.price.touched && frm.controls.price.errors?.required" class="text-danger">Required</span>
          <span *ngIf="frm.controls.price.touched && frm.controls.price.errors?.pattern" class="text-danger">Invalid Price</span>
          </div>
        <div class="form-group">
        InStock: <input type="checkbox" formControlName="inStock"/>
      </div>
      <div class="form-group">
        <button [disabled]="frm.invalid" class="btn btn-success" (click)="onSave()" >Save</button>
      </div>
      </div>
    </form>
  `
})
export class ReactiveFormComponent {

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      author: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern("[0-9]{3,5}")]],
      inStock: []
    });
  }

  onSave() {
    if (this.frm.valid) {
      console.log(this.frm.value);
      this.frm.reset();
    }

  }

}
