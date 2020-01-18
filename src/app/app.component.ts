import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prototype-startup-idea';
  appId = 'theme1'; // default
  switchTheme(appId: string) {
    this.appId = appId; // changing theme based on choice
  }
}
