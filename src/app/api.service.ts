import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

 constructor(private httpClient: HttpClient) { }

  public getUsers(){
  return this.httpClient.get('https://5e53e59831b9970014cf7f9b.mockapi.io/techtest/employees');
  }
}
