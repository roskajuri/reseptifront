import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resepti } from '../models/resepti';

@Injectable({
  providedIn: 'root'
})
export class ReseptiService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  haeReseptit (tuoteid): Observable<any> {
    return this.http.get(this.baseUrl+'reseptit/?tuote='+tuoteid, this.getTokenHeader());
  }

  haeTuotteet (): Observable<any> {
    return this.http.get(this.baseUrl+'tuote/', this.getTokenHeader());
  }
  private getTokenHeader(){
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type' : 'application/json; charset=utf-8',
      'Authorization' : 'Token ' + token});
    return {headers: httpHeaders };
  }

}
