import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApisService{

//function to fetch teams already added
  getTeams(): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/get', { 'access_token': accessToken });
  }
//function to login successfully
  login(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'user/login', data);
  }

//function to logout successfully
  logout(): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'user/logout', { 'access_token': accessToken });
  }
//function to add-new-team
  addTeam(data): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/add',
    Object.assign({ 'access_token': accessToken }, data));
    }
//function to update data of an existing team
  updateTeam(data): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/edit',
      Object.assign({ 'access_token': accessToken }, data));
  }

//function to delete-team
  deleteTeam(data): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/delete',
      Object.assign({ 'access_token': accessToken }, data));
  }

  constructor(private http: HttpClient) {

  }
}