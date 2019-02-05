import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMainRoutingModule } from './app-main-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    AppMainRoutingModule,
    AppCommonModule,
  ],
  declarations: [MainComponent],
  exports: [
      MainComponent
  ]
})
export class AppMainModule { }
