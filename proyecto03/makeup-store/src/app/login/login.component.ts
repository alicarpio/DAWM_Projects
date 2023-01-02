import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../service/resources.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private resourcesService: ResourcesService) {
  }

  username: string = '';
  password: string = '';

  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {

      let makeupData = localStorage.getItem("makeupData");
      if(!makeupData) {
        localStorage.setItem("makeupData", JSON.stringify(response));
      }

    })
  }
}
