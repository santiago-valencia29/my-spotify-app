import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  constructor(private _spotifyApi: SpotifyApiService) {}

  ngOnInit() {}

  search(term: string) {
    // loading
    this._spotifyApi.getArtist(term).subscribe((data) => {
      this.artists = data;
    });
  }
}
