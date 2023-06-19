import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  getEmail(email:string){
    return this.http.get(API+'/usuario/find/byEmail/' + email);
  }
}
