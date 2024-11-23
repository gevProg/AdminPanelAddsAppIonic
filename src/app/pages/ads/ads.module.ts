import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { AdsPage } from './ads.page';
import { CreateAdPage } from './create-ad/create-ad.page';

const routes: Routes = [
  {
    path: '',
    component: AdsPage
  },
  {
    path: 'create',
    component: CreateAdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdsPage, CreateAdPage]
})
export class AdsPageModule {}