import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;

  constructor(private api: ServiceApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.data = this.api.data;
  }

}
