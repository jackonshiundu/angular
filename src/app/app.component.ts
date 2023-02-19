import { Component } from '@angular/core';

@Component({
  selector: 'hive-root',
  templateUrl: './app.component.html',
  //inline html
  /*  template: `hey plesa this is tamplete
   <h2>Hello h1</h1>`, */
  styleUrls: ['./app.component.css'],
  /* styles: [
    `
      h1 {
        color: red;
      }
    `,
  ], */
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin';
}
