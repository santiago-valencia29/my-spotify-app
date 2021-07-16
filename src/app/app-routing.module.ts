import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './spotify/spotify.component';

const routes: Routes = [
  { path: 'entry-token', component: SpotifyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'entry-token' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
