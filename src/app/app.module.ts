import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMuseumComponent } from './add-museum/add-museum.component';
import { AppComponent } from './app.component';
import { MuseumService } from './services/OpenMuseum/openmuseum.service'
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { IndexComponent } from './index/index.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: 'add', component: AddMuseumComponent },
  { path: '', component: IndexComponent },
  { path: 'museum/:reference', component: MuseumDetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
    NotFoundComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
