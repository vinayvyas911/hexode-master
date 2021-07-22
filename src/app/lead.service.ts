import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";

const serverUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  public getUsers() {
    let myResponse = this.http.get<any>(serverUrl + 'user/getUsers');
    console.log(myResponse);
    return myResponse;
  }
  public getLeads() {
    let myResponse = this.http.get<any>(serverUrl + 'leads/getLeads');
    return myResponse;
  }
  public getLead(id: string) {
    let myResponse = this.http.get<any>(serverUrl + 'leads/getLead/' + id);
    return myResponse;
  }
  
  register(data: any): Observable<any> {
    return this.http.post(serverUrl + 'leads/add', data);
  }
   
  addUser(data: any): Observable<any> {
    return this.http.post(serverUrl + 'user/add', data);
  }
  Assign(data: any): Observable<any> {
    return this.http.post(serverUrl + 'leads/assign', data);
  }
  updateStatus(data: any): Observable<any> {
    return this.http.post(serverUrl + 'leads/statusupdate', data);
  }
  upload(data: any): Observable<any> {
    return this.http.post<any>(serverUrl + 'leads/upload', data);
  }

  checkLoginStatus() : boolean{
    return false;
  }

  get isLoggesIn(){
    return this.loginStatus.asObservable();
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(serverUrl + `user/login`, data)
        .pipe(map(data => {
          this.loginStatus.next(true);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data.data.payload));
            localStorage.setItem('token', JSON.stringify(data.data.token));
            return data;
        }));
}
public isAuthenticated(): boolean {
  const tokenExits = localStorage.getItem("token") ? true : false;
  const userDetailExits = localStorage.getItem("currentUser") ? true : false; // Check whether the token is expired and return
  // true or false
  if (tokenExits && userDetailExits) {
    return true;
  }
  return false;
}

public isAdmin(): boolean {
  
  const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  // true or false
  if (currentUser.role=== 'admin') {
    return true;
  }
  return false;
}

logout(){
  this.loginStatus.next(false);
  localStorage.clear();
}
}
