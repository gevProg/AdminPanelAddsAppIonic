import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'grid' },
    { title: 'All Ads', url: '/ads', icon: 'list' },
    { title: 'Create Ad', url: '/ads/create', icon: 'add-circle' },
    { title: 'Locations', url: '/locations', icon: 'location' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ];

  constructor() {}
}