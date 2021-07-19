import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { SwalConfig } from 'src/app/shared/ConfigSwalAlert';
import Swal from 'sweetalert2';
import { SpotifyApiService } from '../services/spotify-api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Track } from '../models/track.model';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit
{
  displayedColumns: string[] = [
    'position',
    'photo',
    'album',
    'song',
    'preview',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  artist: any = {};
  topTracks: Track[] = [];
  loadingArtist: boolean;
  dataSource = new MatTableDataSource(this.topTracks);
  constructor(
    private router: ActivatedRoute,
    private _spotifyApi: SpotifyApiService
  ) {
    super();
    this.loadingArtist = true;

    this.subs.sink = this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getArtist(id: string) {
    this.loadingArtist = true;
    let alert: {};
    alert = SwalConfig.loadingDesignArtist;
    Swal.fire(alert);
    Swal.showLoading();
    this.subs.sink = this._spotifyApi.getArtist(id).subscribe(
      (artist) => {
        this.artist = artist;
        this.loadingArtist = false;
        Swal.close();
        this.getTopTracks(id);
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

  getTopTracks(id: string) {
    let alert: {};
    alert = SwalConfig.loadingDesignTracks;
    Swal.fire(alert);
    Swal.showLoading();
    this.subs.sink = this._spotifyApi.getTopTracks(id).subscribe(
      (topTracks) => {
        this.topTracks = topTracks.map((data, index) => {
          return {
            position: index + 1,
            photo: data.album.images,
            album: data.album.name,
            song: data.name,
            preview: data.id,
          };
        });
        this.dataSource = new MatTableDataSource(this.topTracks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }
}
