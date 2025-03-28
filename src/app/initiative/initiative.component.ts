import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
@Component({
  selector: 'app-initiative',
  standalone: true,
  imports: [ButtonModule, ColorPickerModule],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.scss',
})
export class InitiativeComponent {}
