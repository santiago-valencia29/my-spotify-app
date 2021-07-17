import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  constructor(private http: HttpClient) {}
  token;

  getTokenAuth() {
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', 'f0151316ba28418b80f25633562de27e');
    body.set('client_secret', '93a1c081b49a42bbb670ffd3a9433efc');

    return this.http.post(environment.authSpotifyApi, body.toString(), options);
  }

  getQuery(query: string) {
    const url = environment.urlSpotifyApi + query;
    let tokenApiSpotify = localStorage.getItem('tokenApiSpotify');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenApiSpotify}`,
    });

    return this.http.get(url, { headers });
  }
}
