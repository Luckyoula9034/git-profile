import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   private username:string;
   private clientid='df597c0625c6ea07141d';
   private clientsecret='0752ec2a30094c119de78be7139b0c0c6cc41381';
  constructor(private http:HttpClient) { 
    console.log("service is ready")
    this.username = 'luckyoula'
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret  )};
}
