import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {
  ads: Ad[] = [];
  filteredAds: Ad[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all';
  selectedCategory: string = 'all';

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.loadAds();
  }

  async loadAds() {
    // In a real app, this would be an API call
    this.ads = [
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
    this.applyFilters();
  }

  applyFilters() {
    this.filteredAds = this.ads.filter(ad => {
      const matchesSearch = ad.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          ad.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.selectedStatus === 'all' || ad.status === this.selectedStatus;
      const matchesCategory = this.selectedCategory === 'all' || ad.category === this.selectedCategory;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    this.applyFilters();
  }

  onStatusChange(event: any) {
    this.selectedStatus = event.detail.value;
    this.applyFilters();
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.detail.value;
    this.applyFilters();
  }

  async deleteAd(id: string) {
    // In a real app, this would be an API call
    this.ads = this.ads.filter(ad => ad.id !== id);
    this.applyFilters();
  }
}