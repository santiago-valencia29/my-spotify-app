import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/app-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  imports: [CommonModule, RouterModule, AngularMaterialModule, NgwWowModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SharedModule {}
