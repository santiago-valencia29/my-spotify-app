import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyComponent } from './spotify.component';
import { AngularMaterialModule } from '../app-material.module';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  exports: [],
  declarations: [SpotifyComponent],
})
export class SpotifyModule {}
