import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private jwtToken : any;
  private host: string = "http://localhost:8080";
  username: any ;
  roles: any;

  constructor(private http:HttpClient) { }


  login(data: any){
    return this.http.post(this.host + "/login", data, {observe: 'response'});
  }

  register(user: any){
    return this.http.post(this.host + "/register", user);
  }

  saveToken(jwt:any)
  {
    this.jwtToken = "Bearer " + jwt;
    localStorage.setItem('token',this.jwtToken);
    this.parseJWT();
  }

  parseJWT(){
    let jwtHelper=new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    this.username = jwtHelper.decodeToken(this.jwtToken).sub;
  }

  loadToken(): string{
    this.jwtToken = localStorage.getItem('token');
    this.parseJWT();
    return this.jwtToken;
  }

  getRoles()
  {
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host + "/appRoles",
      {headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  logout(){
    localStorage.removeItem('token');
    this.initParams();
  }

  initParams(){
    this.jwtToken = undefined;
    this.roles = undefined;
    this.username = undefined;
  }

  isAuthenticate(){
    if(localStorage.getItem("token"))
      return true;
    else
      return false;
  }

  isAdmin(){
    return this.isAuthenticate() && this.roles.includes('ADMIN');

  }
  
  saveTask(task: any) {
    return this.http.post(this.host+"/appRoles",task,{headers:new HttpHeaders({'Authorization': this.jwtToken})});
  }

}
