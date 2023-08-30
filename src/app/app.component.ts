import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'my-app',
  standalone: false,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class AppComponent implements OnInit {
  name = 'Angular';
  constructor(private msalService: MsalService) {}

  ngOnInit() {
    console.log('hello');
    this.msalService.loginRedirect().subscribe((v) => {
      console.log(v);
    });
  }
}
