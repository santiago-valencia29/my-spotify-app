import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  newRealeasesSongs = [];
  constructor(private router: Router, private _spotifyApi: SpotifyApiService) {
    super();
  }

  ngOnInit() {
    this.subs.sink = this._spotifyApi.loadReleases$.subscribe((data) => {
      if (data) {
        this.newRealeasesSongs = data;
      }
    });
  }

  showArtist(artistId: string) {
    this.router.navigate(['/artist', artistId]);
  }
}
