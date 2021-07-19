import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ArtistComponent } from './artist/artist.component';
import { RouterModule } from '@angular/router';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [HomeComponent, SearchComponent, ArtistComponent],
  declarations: [
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NoimagePipe,
    DomseguroPipe,
  ],
})
export class SpotifyModule {}
