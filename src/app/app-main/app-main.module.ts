import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMainRoutingModule } from './app-main-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatAccordion, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFeatureState from './store/reducers';
import { BeerEffects } from './store/effects';
import { environment } from '../../environments/environment';

import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DetailComponent } from './detail/detail.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppMainRoutingModule,
    AppCommonModule,
    HttpClientModule,
    StoreModule.forRoot(fromFeatureState.reducers, { metaReducers: fromFeatureState.metaReducers }),
    EffectsModule.forRoot([BeerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
  ],
  declarations: [MainComponent, ListComponent, FavoriteComponent, DetailComponent, ListItemComponent, FilterComponent, DetailDialogComponent],
  exports: [
    MainComponent
  ],
  entryComponents: [DetailDialogComponent],
  providers: [

    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    AppService
  ]
})
export class AppMainModule { }
