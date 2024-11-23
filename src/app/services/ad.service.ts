import { Injectable } from '@angular/core';
import { Ad } from '../interfaces/ad.interface';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  constructor() {}

  // In a real app, these methods would make HTTP requests to your backend API
  async getAds(): Promise<Ad[]> {
    return [];
  }

  async getAd(id: string): Promise<Ad | null> {
    return null;
  }

  async createAd(ad: Ad): Promise<Ad> {
    return ad;
  }

  async updateAd(id: string, ad: Ad): Promise<Ad> {
    return ad;
  }

  async deleteAd(id: string): Promise<boolean> {
    return true;
  }
}