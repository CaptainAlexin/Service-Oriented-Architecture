import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuerdosPageRoutingModule } from './recuerdos-routing.module';

import { RecuerdosPage } from './recuerdos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuerdosPageRoutingModule
  ],
  declarations: [RecuerdosPage]
})
export class RecuerdosPageModule {}
