import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newRealeasesSongs = [];
  constructor(private router: Router, private _spotifyApi: SpotifyApiService) {}

  ngOnInit() {
    this._spotifyApi.loadReleases$.subscribe((data) => {
      if (data) {
        this.newRealeasesSongs = data;
      }
    });
  }

  showArtist(artistId: string) {
    this.router.navigate(['/artist', artistId]);
  }
}
