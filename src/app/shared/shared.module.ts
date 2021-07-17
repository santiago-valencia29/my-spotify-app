import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/app-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SharedModule {}
