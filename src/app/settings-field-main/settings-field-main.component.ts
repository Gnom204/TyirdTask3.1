import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-field-main',
  templateUrl: './settings-field-main.component.html',
  styleUrls: ['./settings-field-main.component.css']
})
export class SettingsFieldMainComponent {
  testForm = new FormGroup({
    testValue: new FormControl('РЕГИСТРАЦИЯ НА ВЕБИНАР ЧЕРЕЗ БИЗОН', Validators.required),
    testValue2: new FormControl('Общая -> Новая сделка[NEW]', Validators.required),
  });
}
