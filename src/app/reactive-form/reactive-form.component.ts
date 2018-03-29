import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
   <h1>Add New Book</h1>
   <form [formGroup]="frm">
   <div class="col-md-5">
        <div class="form-group">
          <input type="text" placeholder="Name" class="form-control" formControlName="name"/>
          
        </div>
        <div class="form-group">
          <input  type="text" placeholder="Author" class="form-control" formControlName="author" />
          </div>
        <div class="form-group">
          <input type="text" required="true" class="form-control" placeholder="Price" formControlName="price"/>
        </div>
        <div class="form-group">
        InStock: <input type="checkbox" formControlName="inStock"/>
      </div>
      <div class="form-group">
        <button class="btn btn-success" (click)="onSave()" >Save</button>
      </div>
      </div>
    </form>
  `
})
export class ReactiveFormComponent {

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frm = this.fb.group({
      name: [''],
      author: [],
      price: [''],
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
