import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FooterComponent {
  readonly arrow = TUI_ARROW;
}
