import { AuthService } from '@auth0/auth0-angular';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.auth.loginWithPopup({ screen_hint: 'sign_up', prompt: 'login' });
  }

  logout(): void {
    this.auth.logout( {returnTo: this.doc.location.origin} );
  }

}
