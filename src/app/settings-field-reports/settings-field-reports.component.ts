import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-field-reports',
  templateUrl: './settings-field-reports.component.html',
  styleUrls: ['./settings-field-reports.component.css']
})
export class SettingsFieldReportsComponent {
  testForm = new FormGroup({
    testValue: new FormControl('ОТЧЕТ ИЗ BIZON365 О ПРИСУТСТВИИ НА ВЕБИНАРЕ:', Validators.required),
    testValue2: new FormControl('Общая -> Новая сделка[NEW]', Validators.required),
    testValue3: new FormControl('Комментарии из вебинарной комнаты:', Validators.required),
  });
}
