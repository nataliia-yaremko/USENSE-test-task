import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
  @Input() minimalPasswordLength: number = 8;
  passwordChangedEvent = new EventEmitter<string>();

  password: string = '';

  protected passwordChanged() {
    this.passwordChangedEvent.emit(this.password);
  }
}