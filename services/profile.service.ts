import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   private username:string;
   private clientid= '6f37eacbd3d8e750d96f'
   private clientsecret='3298fc43941620572fa5c506c3cc977e0c3d561b';
  constructor(private http:HttpClient) { 
    console.log("service is ready")
    this.username = 'Luckyoula9034'
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)};
}
