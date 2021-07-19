import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalConfig } from 'src/app/shared/ConfigSwalAlert';
import Swal from 'sweetalert2';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  loadingArtist: boolean;
  constructor(
    private router: ActivatedRoute,
    private _spotifyApi: SpotifyApiService
  ) {
    this.loadingArtist = true;

    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  ngOnInit() {}

  getArtist(id: string) {
    let alert: {};
    alert = SwalConfig.loadingDesign;
    Swal.fire(alert);
    this.loadingArtist = true;
    Swal.showLoading();
    this._spotifyApi.getArtist(id).subscribe(
      (artist) => {
        this.artist = artist;
        this.loadingArtist = false;
        Swal.close();
      },
      (err) => {
        const alertError: {} = SwalConfig.errorConexion;
        alertError['text'] = err.error.error;
        Swal.fire(alertError).then((result) => {
          Swal.showLoading();
          this.ngOnInit();
        });
      }
    );
  }
}
