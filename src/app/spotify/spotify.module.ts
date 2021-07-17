import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyComponent } from './spotify.component';
import { AngularMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, FlexLayoutModule],
  exports: [],
  declarations: [SpotifyComponent],
})
export class SpotifyModule {}
