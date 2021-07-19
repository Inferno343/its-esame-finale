import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  tipoInteresse:any;
  data:any = [];

  constructor(private api:ServiceApiService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.tipoInteresse = this.route.snapshot.paramMap.get('tipoInteresse');

    let dati = this.api.data;

    for (let i = 0; i < dati.length; i++) {
      const element = dati[i];

      if (element.tipoInteresse.includes(this.tipoInteresse)){
        this.data.push(element);
      }
      
    }
  }

}
