import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../service/resources.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private resourcesService: ResourcesService, private router:Router) {
  }

  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      let makeupData = localStorage.getItem("makeupData");
      if(!makeupData) {
        localStorage.setItem("makeupData", JSON.stringify(response));
      }

    })
  }
  loginUser(pageName:string):void{
    if(this.username === 'alina' && this.password == 'alina123'){
      console.log('welcome')
      this.router.navigate([`${pageName}`]);
    }
  }
}
