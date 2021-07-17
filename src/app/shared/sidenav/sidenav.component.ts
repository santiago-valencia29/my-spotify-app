import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthData } from 'src/app/spotify/models/auth-data.model';
import { SpotifyApiService } from 'src/app/spotify/services/spotify-api.service';
import Swal from 'sweetalert2';
import { SwalConfig } from '../ConfigSwalAlert';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean;
  showlogo: boolean;
  constructor(private _spotifyApi: SpotifyApiService, private router: Router) {}

  ngOnInit() {
    this.tokenAuthEntry();
  }

  tokenAuthEntry() {
    let alert: {};
    alert = SwalConfig.loadingDesign;
    Swal.fire(alert);
    Swal.showLoading();
    this._spotifyApi.getTokenAuth().subscribe(
      (data: AuthData) => {
        if (data.access_token) {
          localStorage.setItem('tokenApiSpotify', data.access_token);
          Swal.close();
          this.router.navigateByUrl('/home');
        }
      },
      (error) => {
        const alertError: {} = SwalConfig.errorConexion;
        alertError['text'] = error.message;
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

  onActivate(event) {
    document.body.scrollTop = 0;
  }
}
