import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1,2,3];
  obj = {a:1, b:{c:2}};
  // img = 'https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg';

  inputValue = '';

  constructor() {
    // setTimeout(() => {
    //   console.log('timeout is over')
    //   this.img = 'https://image.pngaaa.com/363/4145363-middle.png';
    // }, 5000)
  }

  onInput(event : KeyboardEvent) {
    console.log('Event ', event)
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log('Click!')
  }

  onBlur(value: string) {
    this.inputValue = value;
  }
}
