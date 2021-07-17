import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from './services/spotify-api.service';
import { AuthData } from './models/auth-data.model';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css'],
})
export class SpotifyComponent implements OnInit {
  constructor(private _spotifyApi: SpotifyApiService) {}

  ngOnInit() {}

  tokenAuthEntry() {
    this._spotifyApi.getTokenAuth().subscribe((data: AuthData) => {
      if (data.access_token) {
        localStorage.setItem('tokenApiSpotify', data.access_token);
      }
    });
  }
}
