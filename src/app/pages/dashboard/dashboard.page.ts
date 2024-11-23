import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  activeAds: number = 0;
  pendingAds: number = 0;
  totalAds: number = 0;
  recentAds: Ad[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  async loadDashboardData() {
    // In a real app, these would be API calls
    this.activeAds = 15;
    this.pendingAds = 5;
    this.totalAds = 20;
    this.recentAds = [
      {
        id: '1',
        title: 'Sample Ad 1',
        description: 'Description 1',
        imageUrl: 'https://picsum.photos/200',
        location: {
          lat: 40.7128,
          lng: -74.0060,
          address: 'New York, NY'
        },
        startDate: new Date(),
        endDate: new Date(Date.now() + 864000000),
        status: 'active',
        category: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }
}