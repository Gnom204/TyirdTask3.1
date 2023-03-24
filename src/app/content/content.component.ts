import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  testForm = new FormGroup({
    userEmail: new FormControl('mail@mail.ru'),
    userToken: new FormControl('Skjhf7eruoROsad90378KJSHDy834aUFlkjsad9')
  });
}
