import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-field-payment',
  templateUrl: './settings-field-payment.component.html',
  styleUrls: ['./settings-field-payment.component.css']
})
export class SettingsFieldPaymentComponent {
  testForm = new FormGroup({
    testValue: new FormControl('ОТЧЕТ ИЗ BIZON365 О ПРИСУТСТВИИ НА ВЕБИНАРЕ:', Validators.required),
    testValue2: new FormControl('Общая -> Новая сделка[NEW]', Validators.required),
    testValue3: new FormControl('Комментарии из вебинарной комнаты:', Validators.required),
  });
}
