import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent, UserComponent],
  templateUrl: './app.component.html',
  //template: `{{ 1 + 1 }}`
  styleUrl: './app.component.scss',
})
export class AppComponent {
  message = 'AQUI';
  title = 'AngularProject';
  city = 'Xique Xique - BH';
  isLoggedIn = true;
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
}
