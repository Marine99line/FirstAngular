import { Component, OnInit } from '@angular/core';
//import { Url } from 'url';
import { ApiService } from '../../api.service';
//import { getMaxListeners } from 'cluster';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  users = [];

constructor(private apiService: ApiService) { }
ngOnInit() {
  this.apiService.getUsers().subscribe((data: any[])=>{
    console.log(data);
    this.users = data;
  });
}
}
