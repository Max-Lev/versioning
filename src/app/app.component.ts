import { Component } from '@angular/core';
import { conf } from '../../version/vars';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'versioning';
  constructor() {
    console.log('conf: ',conf);
  }
};
