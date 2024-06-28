import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserComponent } from './user/user.component';
import { NgOptimizedImage } from '@angular/common';
import { StepperModule } from 'primeng/stepper';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputOtpModule,
    StepperModule,
    ButtonModule,
    RouterLink,
    RouterOutlet,
    MyComponentComponent,
    UserComponent,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  //template: `{{ 1 + 1 }}`
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @Output() addItemEvent = new EventEmitter<string>();
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  favoriteFramework = '';
  message = 'AQUI';
  title = 'AngularProject';
  city = 'Xique Xique - BH';
  isLoggedIn = true;
  public value: any;
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
  isEditable = true;
  greet() {
    console.log('Hello, there 👋');
    alert('Tu clicou ali!');
  }
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  addItem() {
    this.addItemEvent.emit('🐢');
  }
  showFramework() {
    alert(this.favoriteFramework);
  }
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
