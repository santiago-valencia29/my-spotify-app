import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthData } from 'src/app/spotify/models/auth-data.model';
import { SpotifyApiService } from 'src/app/spotify/services/spotify-api.service';
import Swal from 'sweetalert2';
import { SwalConfig } from '../ConfigSwalAlert';
import { UnsubscribeOnDestroyAdapter } from '../UnsubscribeOnDestroyAdapter';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean;
  showlogo: boolean;
  constructor(private _spotifyApi: SpotifyApiService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.tokenAuthEntry();
  }

  tokenAuthEntry() {
    let alert: {};
    alert = SwalConfig.loadingDesignToken;
    Swal.fire(alert);
    Swal.showLoading();
    this.subs.sink = this._spotifyApi.getTokenAuth().subscribe(
      (data: AuthData) => {
        if (data.access_token) {
          localStorage.setItem('tokenApiSpotify', data.access_token);
          Swal.close();
          this.newSongs();
        }
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

  newSongs() {
    let alert: {};
    alert = SwalConfig.loadingDesign;
    Swal.fire(alert);
    Swal.showLoading();
    this.subs.sink = this._spotifyApi.getNewReleases().subscribe(
      (data) => {
        this._spotifyApi.loadDataReleases(data);
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

  clickHandler() {
    this.sidenav.close();
  }

  onActivateScrollTop(event) {
    document.body.scrollTop = 0;
  }
}
