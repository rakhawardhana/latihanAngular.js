import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AlertComponent } from './alert/alert.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [ListComponent, AddComponent, AlertComponent, DetailsComponent],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})

export class LocationModule { }
