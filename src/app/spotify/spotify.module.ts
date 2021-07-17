import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, FlexLayoutModule],
  exports: [HomeComponent, SearchComponent],
  declarations: [HomeComponent, SearchComponent],
})
export class SpotifyModule {}
