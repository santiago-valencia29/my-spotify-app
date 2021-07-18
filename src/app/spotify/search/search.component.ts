import { Component, OnInit } from '@angular/core';
import { SwalConfig } from 'src/app/shared/ConfigSwalAlert';
import Swal from 'sweetalert2';
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
    this._spotifyApi.getArtist(term).subscribe(
      (data) => {
        this.artists = data;
        console.log(data);

        if (data.length === 0) {
          let alert: {};
          alert = SwalConfig.notFound;
          Swal.fire(alert);
        }
      },
      (err) => {
        console.log(err.error.error.status);
        if (err.error.error.status !== 400) {
          const alertError: {} = SwalConfig.errorConexion;
          alertError['text'] = err.error.error;
          Swal.fire(alertError).then((result) => {
            Swal.showLoading();
            this.ngOnInit();
          });
        }
      }
    );
  }
}
