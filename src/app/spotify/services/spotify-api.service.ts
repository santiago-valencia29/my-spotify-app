import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  private loadReleases = new BehaviorSubject<any>(0);
  public loadReleases$ = this.loadReleases.asObservable();

  constructor(private http: HttpClient) {}

  getTokenAuth() {
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', environment.clientId);
    body.set('client_secret', environment.clientSecret);

    return this.http
      .post(environment.authSpotifyApi, body.toString(), options)
      .pipe(delay(1800));
  }

  getQuery(query: string) {
    const url = environment.urlSpotifyApi + query;
    let tokenApiSpotify = localStorage.getItem('tokenApiSpotify');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenApiSpotify}`,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO&limit=30').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=20`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }

  loadDataReleases(data?: any) {
    if (data == null) {
      return this.loadReleases.getValue();
    }
    this.loadReleases.next(data);
    return this.loadReleases.getValue();
  }
}
