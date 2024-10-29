import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url:string="http://ilandertech.com/api/index.php/Welcome/"

  constructor(public http:HttpClient) { }

  login(data:any){
    return this.http.post(this.url+"StuLogin",data);
  }
  register(data:any){
    return this.http.post(this.url+"AddStuRegister",data);
  }
  getUsers(){
    return this.http.get(this.url+"getStuUsers");
  }
}
