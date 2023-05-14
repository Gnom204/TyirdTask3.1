import { Component, ChangeDetectionStrategy } from '@angular/core';
import { reports } from '../../data'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent {
  items = Array.from(reports).map((_, i) => `Вебинар ${reports[i].name}*${reports[i].dateConduct} [Данные с бизон пришли ${reports[i].dateComing}]`);
}


