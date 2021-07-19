import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  id:any;

  data:any;
  
  constructor(private api:ServiceApiService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    let dati = this.api.data;

    this.data = dati.find(obj => {
      return obj.id == this.id;
    })

  }

}
