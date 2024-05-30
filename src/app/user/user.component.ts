import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  count = 0;
  @Input() occupation = '';
  @Output() incrementCountEvent = new EventEmitter<number>();

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
  onClickMinus1() {
    this.count--;
    this.incrementCountEvent.emit(this.count);
  }
}
