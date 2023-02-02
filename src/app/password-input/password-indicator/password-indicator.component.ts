import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { IsEasy, IsEmpty, IsMedium, IsStrong, IsTooShort } from 'src/utils/text.utils';

enum SectionColor {
  GRAY = '#c1c0b9',
  RED = '#e46161',
  GREEN = '#97cba9',
  YELLOW = '#ffe873'
}

@Component({
  selector: 'app-password-indicator',
  templateUrl: './password-indicator.component.html',
  styleUrls: ['./password-indicator.component.css']
})
export class PasswordIndicatorComponent implements OnInit {
  @Input() minimalPasswordLength: number = 8;
  @Input() passwordChangedEvent: EventEmitter<string> | undefined = undefined;


  ngOnInit(): void {
    this.passwordChangedEvent?.subscribe({
      next: (password: string) => this.calculatePasswordStrength(password)
    });
  }

  firstStrengthIndicatorBackground = SectionColor.GRAY;
  secondStrengthIndicatorBackground = SectionColor.GRAY;
  thirdStrengthIndicatorBackground = SectionColor.GRAY;


  setIndicatorsColors(firstColor: SectionColor, secondColor: SectionColor, thirdColor: SectionColor) {
    [this.firstStrengthIndicatorBackground, this.secondStrengthIndicatorBackground, this.thirdStrengthIndicatorBackground] = [firstColor, secondColor, thirdColor];
  }

  calculatePasswordStrength(password: string) {
    if (IsEmpty(password)) {
      this.setIndicatorsColors(SectionColor.GRAY, SectionColor.GRAY, SectionColor.GRAY);
      return;
    }

    if (IsTooShort(password, this.minimalPasswordLength)) {
      this.setIndicatorsColors(SectionColor.RED, SectionColor.RED, SectionColor.RED);
      return;
    }

    if (IsEasy(password)) {
      this.setIndicatorsColors(SectionColor.RED, SectionColor.GRAY, SectionColor.GRAY);
    }

    if (IsMedium(password)) {
      this.setIndicatorsColors(SectionColor.YELLOW, SectionColor.YELLOW, SectionColor.GRAY);
    }

    if (IsStrong(password)) {
      this.setIndicatorsColors(SectionColor.GREEN, SectionColor.GREEN, SectionColor.GREEN);
    }
  }
}