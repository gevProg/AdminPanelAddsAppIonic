import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdService } from '../../../services/ad.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.page.html',
  styleUrls: ['./create-ad.page.scss'],
})
export class CreateAdPage implements OnInit {
  adForm: FormGroup;
  selectedImage: any = null;

  constructor(
    private fb: FormBuilder,
    private adService: AdService,
    private router: Router
  ) {
    this.adForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: this.fb.group({
        address: ['', Validators.required],
        lat: [null, Validators.required],
        lng: [null, Validators.required]
      })
    });
  }

  ngOnInit() {}

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    if (this.adForm.valid) {
      // In a real app, this would be an API call
      console.log(this.adForm.value);
      this.router.navigate(['/ads']);
    }
  }

  onLocationSelected(event: any) {
    // This would be called when a location is selected from a map
    this.adForm.patchValue({
      location: {
        address: event.address,
        lat: event.lat,
        lng: event.lng
      }
    });
  }
}