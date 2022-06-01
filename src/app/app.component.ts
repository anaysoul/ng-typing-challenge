import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing-challenge';
  randomText = lorem.sentence();

  onInput(value: string) {
    console.log(value);
  }
}
