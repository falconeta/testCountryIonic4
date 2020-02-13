import { ContactPage } from './contact';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'app/explore-container/explore-container.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ContactPage }])
  ]
})
export class ContactModule { }
