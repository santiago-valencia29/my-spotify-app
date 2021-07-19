import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalConfig } from 'src/app/shared/ConfigSwalAlert';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import Swal from 'sweetalert2';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  artists: any[] = [];
  constructor(private router: Router, private _spotifyApi: SpotifyApiService) {
    super();
  }

  ngOnInit() {}

  search(term: string) {
    this.subs.sink = this._spotifyApi.getArtists(term).subscribe(
      (data) => {
        this.artists = data;
        if (data.length === 0) {
          let alert: {};
          alert = SwalConfig.notFound;
          Swal.fire(alert);
        }
      },
      (err) => {
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

  showArtist(artistId: string) {
    this.router.navigate(['/artist', artistId]);
  }
}
