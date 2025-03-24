import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  ReactiveFormsModule,
  FormGroup,
  FormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
  
  private formBuilder = inject(FormBuilder);
  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),

  });


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
