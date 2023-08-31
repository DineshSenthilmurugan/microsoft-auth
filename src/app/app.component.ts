import { Component, Inject, OnInit } from '@angular/core';
import {
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService,
  MSAL_GUARD_CONFIG,
} from '@azure/msal-angular';
import { AuthenticationResult, PopupRequest } from '@azure/msal-browser';

@Component({
  selector: 'my-app',
  standalone: false,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    <button (click)="loginPopup()">login</button>
  `,
})
export class AppComponent implements OnInit {
  name = 'Angular';
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {}

  ngOnInit() {}

  loginPopup() {
    this.authService.loginRedirect();
    // console.log(this.msalGuardConfig.authRequest);
    // if (this.msalGuardConfig.authRequest) {
    //   console.log('sfdf');
    //   this.authService
    //     .loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
    //     .subscribe(
    //       (response: AuthenticationResult) => {
    //         console.log(response);
    //         this.authService.instance.setActiveAccount(response.account);
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    // } else {
    //   this.authService
    //     .loginPopup()
    //     .subscribe((response: AuthenticationResult) => {
    //       this.authService.instance.setActiveAccount(response.account);
    //     });
    // }
  }
}
