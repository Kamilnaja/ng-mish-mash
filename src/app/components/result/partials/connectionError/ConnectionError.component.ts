import { Component, Input } from '@angular/core';
import { Result } from 'src/app/interfaces/Result';

@Component({
  selector: 'app-connection-error',
  templateUrl: './connectionError.html',
  styleUrls: ['./../../result.css']
})

export class ConnectionErrorComponent {
  @Input() result: Result;

}
